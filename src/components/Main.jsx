// import React from "react";
// import ChatInput from "./ChatInput";

// const Main_body = () => (
//   <div className="relative h-screen w-full">
//     <div className="flex justify-center items-center h-full w-full">
//       <p className="text-2xl text-center w-full">Ask Cheems</p>
//       <ChatInput />
//     </div>
//   </div>
// );

// export default Main_body;


// import React, { useState } from "react";
// import ChatInput from "./ChatInput";

// const MainBody = () => {
//   // State to manage the history of messages and responses
//   const [historyData, setHistoryData] = useState([]);

//   // Function to display the AI response based on clicked message
//   const showResponse = (index) => {
//     const { aiResponse } = historyData[index];
//     document.querySelector('#output').textContent = aiResponse;
//   };

//   return (
    

//     <div className="relative h-screen w-full">
//       {/* Main content area */}
//       <div className="flex justify-center items-center h-full w-full  bg-white dark:bg-gray-700">
//         <p className="text-4xl text-white text-center w-full ">Ask Me !</p>
//       </div>

//       {/* Chat Input Component, passing setHistoryData to track history */}
//       <div className="absolute bottom-0 w-full">
//         <ChatInput setHistoryData={setHistoryData} />
//       </div>

//       {/* History of messages, allowing users to click and view AI responses */}
//       <div className="history mt-6">
//         {historyData.map((item, index) => (
//           <p
//             key={index}
//             onClick={() => showResponse(index)}
//             className="cursor-pointer text-gray-600 hover:text-blue-500"
//           >
//             {item.userMessage}
//           </p>
//         ))}
//       </div>
//     </div>
    
//   );
// };

// export default MainBody;


// import React, { useState } from "react";
// import ChatInput from "./ChatInput";

// const MainBody = () => {
//   const [historyData, setHistoryData] = useState([]);
  
//   return (
    
//     <div className="relative h-screen w-full bg-white dark:bg-gray-900 flex flex-col">
//       {/* Message area */}
//       <div className="flex-1 overflow-y-auto px-4 py-4">
//         {historyData.length === 0 ? (
//           // Show welcome message when there's no chat
//           <div className="flex flex-col items-center justify-center text-center mt-40 text-gray-800 dark:text-white">
//             <h1 className="text-3xl font-semibold">Ask me anything!</h1>
//             <p className="text-lg mt-2">
//             ~ developed by <span className="font-bold text-blue-500">UtkarshJi</span>.
//             </p>
//           </div>

//         ) : (
//           // Show chat history when messages exist
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
//       <div className="w-full mb-8">
//         <ChatInput setHistoryData={setHistoryData} />
//       </div>
//     </div>
//   );
// };

// export default MainBody;

import React, { useState } from "react";
import ChatInput from "./ChatInput";

const MainBody = () => {
  const [historyData, setHistoryData] = useState([]);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900">
      {/* Message area */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {historyData.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center mt-40 text-gray-800 dark:text-white">
            <h1 className="text-3xl font-semibold">Ask me anything!</h1>
            <p className="text-lg mt-2">
              ~ developed by <span className="font-bold text-blue-500">UtkarshJi</span>.
            </p>
          </div>
        ) : (
          historyData.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="bg-blue-100 dark:bg-blue-800 text-gray-900 dark:text-white p-2 rounded-lg max-w-xl mx-auto text-left">
                <strong>You:</strong> {item.userMessage}
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-lg max-w-xl mx-auto mt-1 text-left">
                <strong>Cheems:</strong> {item.aiResponse}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Chat input at bottom */}
      <div className="px-4 py-4 bg-white dark:bg-gray-900 shadow-md">
        <ChatInput setHistoryData={setHistoryData} />
      </div>
    </div>
  );
};

export default MainBody;
