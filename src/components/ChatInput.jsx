// import React from "react";

// function ChatInput() {
//   return (
//     <div className="w-full fixed bottom-0 left-0 px-4 py-3 bg-white shadow-md">
//       <div className="max-w-3xl mx-auto flex items-center gap-2 bg-gray-100 rounded-lg p-3">
//         <input
//           type="text"
//           placeholder="Send a message..."
//           className="flex-1 bg-transparent outline-none text-gray-800"
//         />
//         <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition">
//         🡡
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatInput;


// import React, { useState } from "react";

// const API_KEY = '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';

// function ChatInput({ setHistoryData }) {
//   const [userMessage, setUserMessage] = useState('');

//   const clearInput = () => setUserMessage('');

//   const getMessage = async () => {
//     if (!userMessage) return;

//     const options = {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: "llama-3.3-70b-versatile",
//         messages: [{ role: "user", content: userMessage }],
//         max_tokens: 100,
//       }),
//     };

//     try {
//       const response = await fetch('https://api.groq.com/openai/v1/chat/completions', options);
//       const data = await response.json();

//       const aiMessageResponse = data.choices[0]?.message?.content || "No response";

//       if (aiMessageResponse && userMessage) {
//         setHistoryData(prev => [...prev, { userMessage, aiResponse: aiMessageResponse }]);
//       }

//       clearInput();
//     } catch (error) {
//       console.error('Error fetching Groq completion:', error);
//     }
//   };

//   return (
//     <div className="w-full px-4 py-4 pb-16 bg-white dark:bg-gray-900 shadow-md fixed bottom-0 left-0">
//       {/* Input field */}
//       <div className="max-w-3xl mx-auto flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
//         <input
//           type="text"
//           placeholder="Send a message..."
//           value={userMessage}
//           onChange={(e) => setUserMessage(e.target.value)}
//           className="flex-1 bg-transparent outline-none text-gray-800 dark:text-white"
//         />
//         <button
//           onClick={getMessage}
//           className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
//         >
//           🡡
//         </button>
//       </div>

//       {/* Love message */}
//       <p className="fixed bottom-2 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-300 text-sm">
//         Made with <span className="mx-1 text-red-500">❤️</span> by UtkarshJi
//       </p>
//     </div>
//   );
// }

// export default ChatInput;

import React, { useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

function ChatInput({ setHistoryData }) {
  const [userMessage, setUserMessage] = useState('');

  const clearInput = () => setUserMessage('');

  const getMessage = async () => {
    if (!userMessage) return;

    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: userMessage }],
        max_tokens: 100,
      }),
    };

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', options);
      const data = await response.json();

      const aiMessageResponse = data.choices[0]?.message?.content || "No response";

      if (aiMessageResponse && userMessage) {
        setHistoryData(prev => [...prev, { userMessage, aiResponse: aiMessageResponse }]);
      }

      clearInput();
    } catch (error) {
      console.error('Error fetching Groq completion:', error);
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
        <input
          type="text"
          placeholder="Send a message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="flex-1 bg-transparent outline-none text-gray-800 dark:text-white"
          onKeyDown={(e) => e.key === 'Enter' && getMessage()}
        />
        <button
          onClick={getMessage}
          className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
        >
          🡡
        </button>
      </div>

      {/* Bottom-centered "Made with ❤️" message */}
      <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-1">
        Made with <span className="mx-1 text-red-500">❤️</span>
      </p>
    </>
  );
}

export default ChatInput;
