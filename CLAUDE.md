# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**寶寶識字連連看** is a static Chinese character learning game for children aged 3–6. It is deployed via EZPage with no build system, no package manager, and no server — every HTML file runs directly in the browser, including via `file://` protocol.

## Running the App

Open any HTML file directly in a browser — no build step or local server required:

```
open index.html        # main menu
open basic.html        # 連連看 (word-image matching)
open advanced.html     # 聽音辨字 (listen and choose)
open shooter.html      # 打幽靈 (ghost shooter)
```

There are no tests, no linter, and no CI pipeline.

## Architecture

### No build toolchain

All dependencies (React 18, ReactDOM, Babel Standalone, Tailwind CSS) are loaded from CDN at runtime. There is no `node_modules`, `package.json`, or compilation step.

### File roles

| File | Role |
|------|------|
| `index.html` | Main menu — vanilla JS only, no React |
| `basic.html` | 連連看 game — JSX via `<script type="text/babel">` |
| `advanced.html` | 聽音辨字 game — JSX via `<script type="text/babel">` |
| `shooter.html` | 打幽靈 game — JSX via `<script type="text/babel">` |
| `shared/common.js` | Shared React components and hooks — **must be pre-compiled `React.createElement` calls, no JSX** |
| `shared/styles.css` | Minimal CSS additions (shake animation, overflow) |
| `data/K1B-1.js` | Word bank set 1, populates `window.WORD_DATA["K1B-1"]` |
| `data/K1B-2.js` | Word bank set 2, populates `window.WORD_DATA["K1B-2"]` |

### Two-tier JS pattern

- **`shared/common.js`** is loaded as a regular `<script src>` and must use only `React.createElement(...)` — no JSX. This is because Babel Standalone only transforms `<script type="text/babel">` blocks.
- **Game HTML files** contain their per-page `App` component inside `<script type="text/babel">`, where JSX is fine.

### Word bank data loading

Data files assign to `window.WORD_DATA[setId]` so they work under `file://` (no fetch needed). The `loadAllWordSets()` function in `common.js` reads from this global. Every HTML file must include `<script src="data/K1B-1.js">` and `<script src="data/K1B-2.js">` in `<head>` before `common.js`.

### Shared hook: `useGameSetup()`

All three game modes consume the `useGameSetup()` hook (defined in `common.js`), which manages:
- Loading all word sets from `window.WORD_DATA`
- Which sets are selected and how many questions to draw
- Building a shuffled `gamePool` via `buildPool()`

Each game then drives its own state machine (`intro → playing → finished`).

### Word item schema

Each word entry in a data file has:
```js
{
  id: "wind",          // unique string key
  char: "風",          // the Chinese character to learn
  icon: "🌬️",         // emoji shown as the image clue (most items)
  type: "custom-...", // alternative to icon; triggers a custom visual component
  color: "bg-blue-100 text-blue-600",  // Tailwind classes
  label: "風車"        // spoken label used in audio prompts
}
```

Items with `type` starting with `custom-` render a special React component in `RightSideVisual` (defined in `common.js`) instead of an emoji.

### AI / TTS

`shared/common.js` exports two async functions:
- `generateSentenceWithGemini(char)` — calls Gemini API to compose a child-friendly sentence
- `speakText(text)` — tries Gemini TTS first; falls back to `window.speechSynthesis` if `apiKey` is empty or the call fails

The `apiKey` constant at the top of `common.js` is intentionally left empty in the repo; fill it in locally to enable AI features.

## Adding a New Word Bank

1. Create `data/K1B-X.js` following the pattern of `K1B-1.js` (assign to `window.WORD_DATA["K1B-X"]`).
2. Add the new set ID to `AVAILABLE_SET_IDS` in `shared/common.js`.
3. Add `<script src="data/K1B-X.js"></script>` to the `<head>` of every HTML file that should include it (before `common.js`).

## Adding a Custom Visual

To add a new `custom-*` type:
1. Define a new React component using `React.createElement(...)` in `common.js`.
2. Add a branch to the `RightSideVisual` component in `common.js` that returns your component when `item.type === 'custom-yourtype'`.
3. Use `type: "custom-yourtype"` on the word entry in the data file.
