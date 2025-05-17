// import React, { useEffect, useRef } from "react";
// import ChatInput from "./ChatInput";

// export default function MainBody({ history, setHistory, active, setActive }) {
//   // show current conversation or welcome if none selected
//   const messages = active === null ? [] : [history[active]];

//   const chatRef = useRef(null);

//   // scroll to bottom whenever messages change
//   useEffect(() => {
//     if (chatRef.current) {
//       chatRef.current.scrollTop = chatRef.current.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <div className="flex flex-col h-full bg-white dark:bg-gray-900">
//       {/* scrollable chat window */}
//       <div
//         ref={chatRef}
//         className="flex-1 overflow-y-auto px-4 py-4"
//       >
//         {messages.length === 0 ? (
//           <Welcome />
//         ) : (
//           messages.map((m, i) => <Pair key={i} {...m} />)
//         )}
//       </div>

//       {/* input */}
//       <div className="px-4 py-4 bg-white dark:bg-gray-900 shadow-md">
//         <ChatInput
//           setHistoryData={(updater) => {
//             setHistory(updater);
//             setActive(history.length); // focus on the new item
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// const Welcome = () => (
//   <div className="flex flex-col items-center justify-center text-center mt-40 text-gray-800 dark:text-white">
//     <h1 className="text-3xl font-semibold">Ask me anything!</h1>
//     <p className="text-lg mt-2">
//       ~ developed by <span className="font-bold text-blue-500">UtkarshJi</span>.
//     </p>
//   </div>
// );

// const Pair = ({ userMessage, aiResponse }) => (
//   <div className="mb-4">
//     <Bubble isUser>{userMessage}</Bubble>
//     <Bubble>{aiResponse}</Bubble>
//   </div>
// );

// function Bubble({ isUser, children }) {
//   return (
//     <div
//       className={`p-2 rounded-lg w-full break-words whitespace-pre-wrap ${
//         isUser
//           ? "bg-blue-100 dark:bg-blue-800 text-gray-900 dark:text-white"
//           : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mt-1"
//       }`}
//     >
//       <strong>{isUser ? "You:" : "Cheems:"}</strong> {children}
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";
import ChatInput from "./ChatInput";

export default function MainBody({ history, setHistory, active, setActive }) {
  // Choose conversation to display
  const messages = active === null ? [] : [history[active]];

  const chatRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900">
      {/* Scrollable chat window */}
      <div ref={chatRef} className="flex-1 overflow-y-auto px-4 py-4">
        {messages.length === 0 ? (
          <Welcome />
        ) : (
          messages.map((m, i) => <Pair key={i} {...m} />)
        )}
      </div>

      {/* Input bar */}
      <div className="px-4 py-4 bg-white dark:bg-gray-900 shadow-md">
        <ChatInput
          setHistoryData={(updater) => {
            setHistory(updater);
            setActive(history.length); // focus newest
          }}
        />
      </div>
    </div>
  );
}

/* Welcome screen when no chat is active */
const Welcome = () => (
  <div className="flex flex-col items-center justify-center text-center mt-40 text-gray-800 dark:text-white">
    <h1 className="text-3xl font-semibold">Ask me anything!</h1>
    <p className="text-lg mt-2">
      ~ developed by <span className="font-bold text-blue-500">UtkarshJi</span>.
    </p>
  </div>
);

/* User + AI message pair */
const Pair = ({ userMessage, aiResponse }) => (
  <div className="mb-4">
    <Bubble isUser>{userMessage}</Bubble>
    <Bubble>{aiResponse}</Bubble>
  </div>
);

/* Reusable bubble component with fixed 600 px width */
function Bubble({ isUser, children }) {
  return (
    <div
      className={`p-2 rounded-lg w-[600px] mx-auto break-words whitespace-pre-wrap ${
        isUser
          ? "bg-blue-100 dark:bg-blue-800 text-gray-900 dark:text-white"
          : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mt-1"
      }`}
    >
      <strong>{isUser ? "You:" : "Cheems:"}</strong> {children}
    </div>
  );
}
