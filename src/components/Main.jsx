// import React, { useState } from "react";
// import ChatInput from "./ChatInput";

// const MainBody = () => {
//   const [historyData, setHistoryData] = useState([]);

//   return (
//     <div className="flex flex-col h-full bg-white dark:bg-gray-900">
//       {/* Message area */}
//       <div className="flex-1 overflow-y-auto px-4 py-4">
//         {historyData.length === 0 ? (
//           <div className="flex flex-col items-center justify-center text-center mt-40 text-gray-800 dark:text-white">
//             <h1 className="text-3xl font-semibold">Ask me anything!</h1>
//             <p className="text-lg mt-2">
//               ~ developed by <span className="font-bold text-blue-500">UtkarshJi</span>.
//             </p>
//           </div>
//         ) : (
//           historyData.map((item, index) => (
//             <div key={index} className="mb-4">
//               <div className="bg-blue-100 dark:bg-blue-800 text-gray-900 dark:text-white p-2 rounded-lg max-w-xl mx-auto text-left">
//                 <strong>You:</strong> {item.userMessage}
//               </div>
//               <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-lg max-w-xl mx-auto mt-1 text-left">
//                 <strong>Cheems:</strong> {item.aiResponse}
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Chat input at bottom */}
//       <div className="px-4 py-4 bg-white dark:bg-gray-900 shadow-md">
//         <ChatInput setHistoryData={setHistoryData} />
//       </div>
//     </div>
//   );
// };

// export default MainBody;

// Main.jsx
import React from "react";
import ChatInput from "./ChatInput";

export default function MainBody({ history, setHistory, active, setActive }) {
  const visible = active === null ? [] : [history[active]];

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900">
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {visible.length === 0 ? <Welcome /> : visible.map((m, i) => <Pair key={i} {...m} />)}
      </div>

      {/* input */}
      <div className="px-4 py-4 bg-white dark:bg-gray-900 shadow-md">
        <ChatInput
          setHistoryData={(fn) => {
            setHistory(fn);
            // always focus newest conversation
            setActive(history.length); // index of new item
          }}
        />
      </div>
    </div>
  );
}

const Welcome = () => (
  <div className="flex flex-col items-center justify-center text-center mt-40 text-gray-800 dark:text-white">
    <h1 className="text-3xl font-semibold">Ask me anything!</h1>
    <p className="text-lg mt-2">
      ~ developed by <span className="font-bold text-blue-500">UtkarshJi</span>.
    </p>
  </div>
);

const Pair = ({ userMessage, aiResponse }) => (
  <div className="mb-4">
    <div className="bg-blue-100 dark:bg-blue-800 text-gray-900 dark:text-white p-2 rounded-lg max-w-xl mx-auto text-left">
      <strong>You:</strong> {userMessage}
    </div>
    <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-lg max-w-xl mx-auto mt-1 text-left">
      <strong>Cheems:</strong> {aiResponse}
    </div>
  </div>
);
