/* ============================================================
   shared/common.js — 共用元件 / 工具 / 自訂 Hook
   採 React.createElement 形式（無 JSX），瀏覽器可直接 <script src> 載入
   無編譯步驟，直接編輯本檔即可
   ============================================================ */
/* =========================================================
   共用程式碼：載入所有模式都會用到的資料、圖示與 UI 元件
   會被各個 *.html 透過 <script type="text/babel" src> 引入
   ========================================================= */

// 可用的題庫清單（對應 data/*.json）
const AVAILABLE_SET_IDS = ['K1B-1', 'K1B-2'];

// Gemini API Key (留空時使用瀏覽器內建 TTS / 無造句)
const apiKey = "";

/* --- 圖示元件 (Lucide 風格 SVG) --- */
const Play = ({
  className,
  fill = "none"
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("polygon", {
  points: "5 3 19 12 5 21 5 3"
}));
const RotateCcw = ({
  className
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("polyline", {
  points: "1 4 1 10 7 10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
}));
const Star = ({
  className,
  fill = "none",
  style
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  style: style,
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("polygon", {
  points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
}));
const Trophy = ({
  className
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 22h16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
}));
const Sparkles = ({
  className
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
}));
const Loader2 = ({
  className
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 12a9 9 0 1 1-6.219-8.56"
}));
const X = ({
  className
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18"
}), /*#__PURE__*/React.createElement("path", {
  d: "m6 6 12 12"
}));
const Check = ({
  className,
  strokeWidth
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: strokeWidth || "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Home = ({
  className
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "9 22 9 12 15 12 15 22"
}));
const Volume2 = ({
  className
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("polygon", {
  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.54 8.46a5 5 0 0 1 0 7.07"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.07 4.93a10 10 0 0 1 0 14.14"
}));

/* --- 工具函式 --- */
const shuffleArray = originalArray => {
  const array = [...originalArray];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const generateSentenceWithGemini = async word => {
  try {
    if (!apiKey) return `(未設定 API Key) 這是${word}。`;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `請用「${word}」這個字，造一個非常簡單、生動、適合3歲小孩聽的短句。限制15個字以內。只要回傳句子就好，不要其他文字。`
          }]
        }]
      })
    });
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || `這是${word}。`;
  } catch (error) {
    console.error("Gemini Text Error:", error);
    return `這是${word}。`;
  }
};
const speakText = async text => {
  try {
    if (!apiKey) throw new Error("No API Key");
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: text
          }]
        }],
        generationConfig: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: "Puck"
              }
            }
          }
        }
      })
    });
    const data = await response.json();
    const audioContent = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (audioContent) {
      const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
      audio.play();
    }
  } catch (error) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-TW';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
};

/* --- 讀取題庫資料 --- */
// 改為從 window.WORD_DATA 讀取，由 data/<id>.js 透過 <script src> 預載
// (這樣可在 file:// 下直接執行，不需要本地 HTTP server 來 fetch JSON)
const loadAllWordSets = async () => {
  const sets = {};
  for (const setId of AVAILABLE_SET_IDS) {
    const data = typeof window !== 'undefined' && window.WORD_DATA && window.WORD_DATA[setId] || null;
    if (data && Array.isArray(data.words)) {
      sets[setId] = data.words;
    } else {
      console.warn(`題庫 ${setId} 未載入：請確認 data/${setId}.js 的 <script src> 已包含於 HTML。`);
      sets[setId] = [];
    }
  }
  return sets;
};

/* --- 特殊視覺元件 (用於右側圖卡) --- */
const DogComparison = ({
  target
}) => /*#__PURE__*/React.createElement("div", {
  className: "flex items-end justify-center gap-4 h-full w-full pb-2 px-1"
}, /*#__PURE__*/React.createElement("div", {
  className: "relative flex items-center justify-center"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-3xl transform translate-y-1"
}, "\uD83D\uDC15"), target === 'small' && /*#__PURE__*/React.createElement("div", {
  className: "absolute -inset-3 border-4 border-red-500 rounded-full animate-pulse pointer-events-none"
})), /*#__PURE__*/React.createElement("div", {
  className: "relative flex items-center justify-center ml-2"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-6xl"
}, "\uD83D\uDC15"), target === 'big' && /*#__PURE__*/React.createElement("div", {
  className: "absolute -inset-2 border-4 border-red-500 rounded-full animate-pulse pointer-events-none"
})));
const JumpVisual = () => /*#__PURE__*/React.createElement("div", {
  className: "flex flex-col items-center justify-center h-full w-full"
}, /*#__PURE__*/React.createElement("div", {
  className: "relative animate-bounce"
}, /*#__PURE__*/React.createElement("div", {
  className: "absolute -top-6 left-0 right-0 text-center"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-2xl text-fuchsia-500 font-black"
}, "\u2191")), /*#__PURE__*/React.createElement("span", {
  className: "text-6xl"
}, "\uD83E\uDDCD")), /*#__PURE__*/React.createElement("div", {
  className: "w-12 h-1.5 bg-slate-200 rounded-full mt-1 opacity-50 scale-x-75 animate-pulse"
}));
const SoilVisual = () => /*#__PURE__*/React.createElement("div", {
  className: "flex flex-col items-center justify-center h-full w-full"
}, /*#__PURE__*/React.createElement("svg", {
  width: "60",
  height: "60",
  viewBox: "0 0 64 64",
  xmlns: "http://www.w3.org/2000/svg",
  className: "drop-shadow-sm"
}, /*#__PURE__*/React.createElement("path", {
  d: "M 4 56 C 4 56, 12 48, 32 48 C 52 48, 60 56, 60 56 Z",
  fill: "#5C4033"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 12 52 C 12 52, 20 20, 36 20 C 50 20, 54 52, 54 52 Z",
  fill: "#8B5A2B"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 22 54 C 22 54, 28 32, 44 32 C 54 32, 58 54, 58 54 Z",
  fill: "#A0522D"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "34",
  cy: "34",
  r: "2",
  fill: "#3E2723",
  opacity: "0.6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "44",
  cy: "42",
  r: "2.5",
  fill: "#3E2723",
  opacity: "0.6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "28",
  cy: "46",
  r: "1.5",
  fill: "#3E2723",
  opacity: "0.6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "48",
  cy: "48",
  r: "1.5",
  fill: "#3E2723",
  opacity: "0.6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "38",
  cy: "50",
  r: "2",
  fill: "#3E2723",
  opacity: "0.6"
})));
// 故事書場景：使用台南 YMCA 網站上的故事書插畫
const StoryBookVisual = () => /*#__PURE__*/React.createElement("div", {
  className: "flex items-center justify-center h-full w-full p-1"
}, /*#__PURE__*/React.createElement("img", {
  src: "https://www.ymca-tainan.org.tw/swf/upload/site_content_article/178/202004151407360.jpg",
  alt: "故事書 - 老師講故事給小朋友聽",
  className: "max-h-full max-w-full object-contain drop-shadow-sm",
  referrerPolicy: "no-referrer",
  loading: "lazy",
  onError: function (e) {
    // 圖片載入失敗時退回顯示書本 emoji
    e.target.style.display = 'none';
    var fallback = document.createElement('span');
    fallback.className = 'text-5xl md:text-6xl';
    fallback.textContent = '📖';
    e.target.parentNode.appendChild(fallback);
  }
}));

// 上樓場景：使用外部圖片(一個人在上樓梯,有箭頭向上)
const StairsUpVisual = () => /*#__PURE__*/React.createElement("div", {
  className: "flex items-center justify-center h-full w-full p-1"
}, /*#__PURE__*/React.createElement("img", {
  src: "https://pic.616pic.com/ys_bnew_img/00/12/52/Ru3CPEEnrU.jpg",
  alt: "上樓 - 一個人在上樓梯",
  className: "max-h-full max-w-full object-contain drop-shadow-sm",
  referrerPolicy: "no-referrer",
  loading: "lazy",
  onError: function (e) {
    e.target.style.display = 'none';
    var fallback = document.createElement('span');
    fallback.className = 'text-5xl md:text-6xl';
    fallback.textContent = '🚶';
    e.target.parentNode.appendChild(fallback);
  }
}));

const RightSideVisual = ({
  item
}) => {
  if (item.type === 'custom-jump') return /*#__PURE__*/React.createElement(JumpVisual, null);
  if (item.type === 'custom-soil') return /*#__PURE__*/React.createElement(SoilVisual, null);
  if (item.type === 'custom-story-book') return /*#__PURE__*/React.createElement(StoryBookVisual, null);
  if (item.type === 'custom-stairs-up') return /*#__PURE__*/React.createElement(StairsUpVisual, null);
  if (item.type && item.type.includes('custom-dogs')) {
    return /*#__PURE__*/React.createElement(DogComparison, {
      target: item.type === 'custom-dogs-small' ? 'small' : 'big'
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    className: "text-5xl md:text-6xl drop-shadow-sm filter"
  }, item.icon);
};
const AIBubble = ({
  text,
  onClose
}) => /*#__PURE__*/React.createElement("div", {
  className: "absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-white rounded-2xl shadow-2xl border-4 border-blue-200 p-4 animate-in fade-in zoom-in duration-300"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex justify-between items-start mb-2"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-2 text-blue-600 font-bold"
}, /*#__PURE__*/React.createElement(Sparkles, {
  className: "w-5 h-5 fill-blue-500"
}), /*#__PURE__*/React.createElement("span", null, "AI \u8001\u5E2B\u8AAA...")), /*#__PURE__*/React.createElement("button", {
  onClick: onClose,
  className: "text-slate-400 hover:text-slate-600"
}, /*#__PURE__*/React.createElement(X, {
  className: "w-5 h-5"
}))), /*#__PURE__*/React.createElement("p", {
  className: "text-xl font-medium text-slate-700 leading-relaxed text-center"
}, text));

/* --- 主選單按鈕 (右上角) --- */
const TopNav = ({
  onBackHome
}) => /*#__PURE__*/React.createElement("div", {
  className: "absolute top-4 right-4 md:top-8 md:right-8 flex gap-2 z-50"
}, /*#__PURE__*/React.createElement("button", {
  onClick: onBackHome,
  className: "flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-700 py-2 px-4 rounded-full font-bold transition-colors shadow-sm active:scale-95"
}, /*#__PURE__*/React.createElement(Home, {
  className: "w-5 h-5"
}), " \u56DE\u4E3B\u9078\u55AE"));

/* --- 共用設定畫面 (題庫選擇 + 題數) --- */
const IntroSetup = ({
  wordSets,
  selectedSets,
  toggleSet,
  questionCount,
  setQuestionCount,
  totalAvailableWords,
  onStart
}) => /*#__PURE__*/React.createElement("div", {
  className: "flex flex-col items-center justify-center h-full space-y-5"
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-xl font-bold text-slate-700"
}, "1. \u8ACB\u9078\u64C7\u8981\u6311\u6230\u7684\u984C\u5EAB (\u53EF\u591A\u9078)\uFF1A"), /*#__PURE__*/React.createElement("div", {
  className: "flex flex-wrap justify-center gap-3 w-full max-w-md"
}, Object.keys(wordSets).map(setId => /*#__PURE__*/React.createElement("button", {
  key: setId,
  onClick: () => toggleSet(setId),
  className: `flex items-center justify-center gap-2 text-lg font-bold py-2 px-4 rounded-2xl border-4 transition-all transform active:scale-95 ${selectedSets.includes(setId) ? 'bg-blue-100 border-blue-500 text-blue-700 shadow-sm' : 'bg-white border-slate-200 text-slate-500 hover:border-blue-300'}`
}, /*#__PURE__*/React.createElement("div", {
  className: `w-5 h-5 rounded border-2 flex items-center justify-center ${selectedSets.includes(setId) ? 'bg-blue-500 border-blue-500' : 'border-slate-300'}`
}, selectedSets.includes(setId) && /*#__PURE__*/React.createElement(Check, {
  className: "w-3 h-3 text-white",
  strokeWidth: "4"
})), setId, " (", wordSets[setId].length, "\u5B57)"))), /*#__PURE__*/React.createElement("div", {
  className: "w-full max-w-sm h-px bg-slate-200 my-1"
}), /*#__PURE__*/React.createElement("h2", {
  className: "text-xl font-bold text-slate-700"
}, "2. \u9078\u64C7\u51FA\u984C\u6578\u91CF\uFF1A"), /*#__PURE__*/React.createElement("div", {
  className: "flex flex-col items-center w-full max-w-sm bg-slate-50 p-4 rounded-2xl border-2 border-slate-100"
}, /*#__PURE__*/React.createElement("div", {
  className: "text-4xl font-black text-blue-500 mb-2"
}, questionCount, " ", /*#__PURE__*/React.createElement("span", {
  className: "text-lg text-slate-400 font-normal"
}, "/ ", totalAvailableWords, " \u984C")), /*#__PURE__*/React.createElement("input", {
  type: "range",
  min: Math.min(1, totalAvailableWords),
  max: Math.max(1, totalAvailableWords),
  value: questionCount,
  onChange: e => setQuestionCount(parseInt(e.target.value)),
  disabled: totalAvailableWords === 0,
  className: "w-full h-3 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
}), /*#__PURE__*/React.createElement("p", {
  className: "text-sm text-slate-400 mt-2"
}, "\u5C07\u6703\u5F9E\u6240\u9078\u984C\u5EAB\u4E2D\u96A8\u6A5F\u51FA\u984C")), /*#__PURE__*/React.createElement("button", {
  onClick: onStart,
  disabled: selectedSets.length === 0 || questionCount === 0,
  className: "flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300 disabled:transform-none text-white text-2xl font-bold py-4 px-12 rounded-full shadow-lg transition-transform transform active:scale-95 mt-2"
}, /*#__PURE__*/React.createElement(Play, {
  className: "w-7 h-7",
  fill: "currentColor"
}), " \u958B\u59CB\u904A\u6232"));

/* --- 完成 / 失敗畫面 --- */
const FinishedScreen = ({
  accuracy,
  stars,
  onRetry
}) => /*#__PURE__*/React.createElement("div", {
  className: "flex flex-col items-center justify-center h-full space-y-4 text-center"
}, /*#__PURE__*/React.createElement(Trophy, {
  className: "w-24 h-24 text-yellow-400 drop-shadow-lg"
}), /*#__PURE__*/React.createElement("h2", {
  className: "text-4xl font-bold text-slate-800"
}, "\u592A\u68D2\u4E86\uFF01"), /*#__PURE__*/React.createElement("p", {
  className: "text-xl text-slate-600"
}, "\u4F60\u5B8C\u6210\u4E86\u9019\u6B21\u7684\u5B78\u7FD2\uFF01"), /*#__PURE__*/React.createElement("div", {
  className: "bg-slate-50 p-4 rounded-2xl w-full max-w-sm border-2 border-slate-100 my-2 shadow-sm"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-2xl font-black text-blue-500 mb-3"
}, "\u7B54\u5C0D\u7387\uFF1A", accuracy, "%"), /*#__PURE__*/React.createElement("div", {
  className: "flex justify-center gap-2"
}, [1, 2, 3, 4, 5].map(starIdx => {
  const delay = `${(starIdx - 1) * 100}ms`;
  if (stars >= starIdx) {
    return /*#__PURE__*/React.createElement(Star, {
      key: starIdx,
      fill: "currentColor",
      className: "w-10 h-10 animate-pulse text-yellow-400",
      style: {
        animationDelay: delay
      }
    });
  } else if (stars + 0.5 === starIdx) {
    return /*#__PURE__*/React.createElement("div", {
      key: starIdx,
      className: "relative w-10 h-10 animate-pulse",
      style: {
        animationDelay: delay
      }
    }, /*#__PURE__*/React.createElement(Star, {
      fill: "none",
      className: "absolute top-0 left-0 w-10 h-10 text-slate-200"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 left-0 h-10 overflow-hidden",
      style: {
        width: '50%'
      }
    }, /*#__PURE__*/React.createElement(Star, {
      fill: "currentColor",
      className: "w-10 h-10 text-yellow-400"
    })));
  } else {
    return /*#__PURE__*/React.createElement(Star, {
      key: starIdx,
      fill: "none",
      className: "w-10 h-10 animate-pulse text-slate-200",
      style: {
        animationDelay: delay
      }
    });
  }
}))), /*#__PURE__*/React.createElement("button", {
  onClick: onRetry,
  className: "flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-3 px-8 rounded-full shadow-lg mt-4 transition-transform active:scale-95"
}, /*#__PURE__*/React.createElement(RotateCcw, {
  className: "w-6 h-6"
}), " \u518D\u73A9\u4E00\u6B21"));
const FailedScreen = ({
  correctCount,
  accuracy,
  onRetry
}) => /*#__PURE__*/React.createElement("div", {
  className: "flex flex-col items-center justify-center h-full space-y-4 text-center"
}, /*#__PURE__*/React.createElement("div", {
  className: "text-8xl drop-shadow-lg animate-pulse"
}, "\uD83D\uDC94"), /*#__PURE__*/React.createElement("h2", {
  className: "text-4xl font-bold text-red-500"
}, "\u904A\u6232\u7D50\u675F"), /*#__PURE__*/React.createElement("p", {
  className: "text-xl text-slate-600"
}, "\u611B\u5FC3\u7528\u5B8C\u4E86\uFF0C\u518D\u63A5\u518D\u53B2\uFF01"), /*#__PURE__*/React.createElement("div", {
  className: "bg-slate-50 p-4 rounded-2xl w-full max-w-sm border-2 border-slate-100 my-2 shadow-sm"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-lg text-slate-600 mb-1"
}, "\u5DF2\u6253\u5012\u76EE\u6A19\u6578"), /*#__PURE__*/React.createElement("p", {
  className: "text-3xl font-black text-blue-500 mb-2"
}, correctCount, " ", /*#__PURE__*/React.createElement("span", {
  className: "text-lg text-slate-400 font-normal"
}, "\u984C")), /*#__PURE__*/React.createElement("p", {
  className: "text-lg text-slate-600 mb-1"
}, "\u7B54\u5C0D\u7387"), /*#__PURE__*/React.createElement("p", {
  className: "text-2xl font-black text-green-500"
}, accuracy, "%")), /*#__PURE__*/React.createElement("button", {
  onClick: onRetry,
  className: "flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-3 px-8 rounded-full shadow-lg mt-4 transition-transform active:scale-95"
}, /*#__PURE__*/React.createElement(RotateCcw, {
  className: "w-6 h-6"
}), " \u518D\u8A66\u4E00\u6B21"));

/* --- 分數計算 --- */
const calculateScore = attempts => {
  if (attempts.total === 0) return {
    accuracy: 0,
    stars: 0
  };
  const rawAccuracy = attempts.correct / attempts.total;
  const accuracy = Math.round(rawAccuracy * 100);
  const rawStars = rawAccuracy * 5;
  const stars = Math.round(rawStars * 2) / 2;
  return {
    accuracy,
    stars
  };
};

/* --- 設置流程 Hook (題庫載入、選擇、題數) --- */
const useGameSetup = () => {
  const [wordSets, setWordSets] = React.useState({});
  const [selectedSets, setSelectedSets] = React.useState([]);
  const [questionCount, setQuestionCount] = React.useState(0);
  const [gamePool, setGamePool] = React.useState([]);
  const [loadingSets, setLoadingSets] = React.useState(true);
  React.useEffect(() => {
    loadAllWordSets().then(sets => {
      setWordSets(sets);
      setLoadingSets(false);
    });
  }, []);
  const totalAvailableWords = selectedSets.reduce((sum, setId) => sum + (wordSets[setId]?.length || 0), 0);
  React.useEffect(() => {
    if (selectedSets.length === 0) {
      setQuestionCount(0);
    } else if (selectedSets.length === 1) {
      setQuestionCount(totalAvailableWords);
    } else {
      setQuestionCount(Math.min(20, totalAvailableWords));
    }
  }, [selectedSets, wordSets]);
  const toggleSet = setId => {
    if (selectedSets.includes(setId)) setSelectedSets(selectedSets.filter(id => id !== setId));else setSelectedSets([...selectedSets, setId]);
  };
  const buildPool = () => {
    let combined = [];
    selectedSets.forEach(setId => {
      combined = [...combined, ...(wordSets[setId] || [])];
    });
    const pool = shuffleArray(combined).slice(0, questionCount);
    setGamePool(pool);
    return pool;
  };
  return {
    wordSets,
    selectedSets,
    toggleSet,
    questionCount,
    setQuestionCount,
    totalAvailableWords,
    gamePool,
    buildPool,
    loadingSets
  };
};
