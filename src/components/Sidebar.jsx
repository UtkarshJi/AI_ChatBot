// import React from "react";

// const Sidebar = () => (
//   <div className="bg-black text-white h-screen p-4 w-64 flex flex-col">
    
//     <div className="flex items-center gap-4 p-4">
//       <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
//           />
//         </svg>
//       </button>

//       <h2 className="text-xl font-bold">CheemAi</h2>
//     </div>

//     <button
//       className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer transition duration-200 mb-3"
//     >
//       History
//     </button>

//     <button
//       className="w-full bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded cursor-pointer transition duration-200 mb-3"
//     >
//       Dashboard
//     </button>

//     <button
//       className="w-full bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded cursor-pointer transition duration-200 mb-3"
//     >
//       Settings
//     </button>

//     {/* Add more buttons or links here */}
//   </div>
// );

// export default Sidebar;


// import React from "react";
// import { FiMenu, FiClock, FiGrid, FiSettings } from "react-icons/fi";

// const Sidebar = ({ isOpen, setIsOpen }) => {
//   if (!isOpen) return null; // Sidebar is not rendered at all when closed

//   return (
//     <div className="bg-black text-white h-screen w-64 p-4 flex flex-col transition-all duration-300">
//       {/* Header with hamburger to close */}
//       <div className="flex items-center gap-4 mb-8">
//         <button
//           onClick={() => setIsOpen(false)}
//           className="p-2 rounded-md hover:bg-gray-800"
//         >
//           <FiMenu size={24} />
//         </button>
//         <h2 className="text-xl font-bold">CheemAi</h2>
//       </div>

//       {/* Sidebar buttons */}
//       <div className="flex flex-col gap-3">
//         <SidebarButton icon={<FiClock />} label="History" />
//         <SidebarButton icon={<FiGrid />} label="Dashboard" />
//         <SidebarButton icon={<FiSettings />} label="Settings" />
//       </div>
//     </div>
//   );
// };

// const SidebarButton = ({ icon, label }) => (
//   <button className="flex items-center gap-4 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded transition duration-200">
//     {icon}
//     <span>{label}</span>
//   </button>
// );

// export default Sidebar;

// Sidebar.jsx
import React from "react";
import { FiMenu, FiPlus } from "react-icons/fi";

/**
 * Props
 * ───────────────────────────────────────────────
 * closeSidebar   ()   → hides the sidebar
 * history        []   → array of { userMessage, aiResponse }
 * setActive      (i)  → choose which conversation to display (null = fresh)
 * startNewChat   ()   → resets active chat (welcome screen)
 */
const Sidebar = ({ closeSidebar, history, setActive, startNewChat }) => (
  <div className="bg-black text-white h-screen w-64 p-4 flex flex-col">
    {/* ── top bar ───────────────────────────────────────── */}
    <div className="flex items-center justify-between mb-6">
      {/* hamburger + logo */}
      <div className="flex items-center gap-2">
        <button
          onClick={closeSidebar}
          className="p-2 rounded-md hover:bg-gray-800 focus:outline-none"
        >
          <FiMenu size={22} />
        </button>
        <h2 className="text-lg font-bold select-none">CheemAi</h2>
      </div>

      {/* + NEW CHAT */}
      <button
        onClick={startNewChat}
        title="New chat"
        className="p-2 rounded-md hover:bg-gray-800 focus:outline-none"
      >
        <FiPlus size={20} />
      </button>
    </div>

    {/* ── conversation history ─────────────────────────── */}
    <div className="flex-1 overflow-y-auto space-y-2 pr-1">
      {history.length === 0 && (
        <p className="text-gray-400 text-sm italic px-1">No conversations yet</p>
      )}

      {/* newest on top */}
      {history
        .slice()            /* copy */
        .reverse()          /* newest first */
        .map((item, revIdx) => {
          const originalIdx = history.length - 1 - revIdx;
          return (
            <button
              key={originalIdx}
              onClick={() => setActive(originalIdx)}
              className="w-full text-left px-3 py-2 bg-gray-700/60 hover:bg-gray-600 rounded-md truncate"
            >
              {item.userMessage}
            </button>
          );
        })}
    </div>
  </div>
);

export default Sidebar;
