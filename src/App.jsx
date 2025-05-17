// import React from "react";
// import Sidebar from "./components/Sidebar";
// import MainBody from "./components/Main";

// const App = () => (
//   <div className="flex h-screen">
//     <div className="w-64">
//       <Sidebar />
//     </div>
//     <div className="flex-1 flex flex-col">
//       <MainBody />
//     </div>
//   </div>
// );

// export default App;

// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import MainBody from "./components/Main";
// import { FiMenu } from "react-icons/fi";

// const App = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="flex h-screen relative">
//       {/* Sidebar: conditionally rendered */}
//       {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}

//       {/* Main content: flex-grow to take all available space */}
//       <div className="flex-1 relative">
//         {/* Floating hamburger button when sidebar is closed */}
//         {!isSidebarOpen && (
//           <button
//             onClick={() => setIsSidebarOpen(true)}
//             className="fixed top-4 left-4 z-50 p-2 rounded-md bg-black text-white hover:bg-gray-800"
//           >
//             <FiMenu size={24} />
//           </button>
//         )}

//         <MainBody />
//       </div>
//     </div>
//   );
// };

// export default App;

// App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainBody from "./components/Main";
import { FiMenu } from "react-icons/fi";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [history, setHistory]          = useState([]);   //  ← shared
  const [active,  setActive]           = useState(null); //  ← which convo to show

  const startNewChat = () => setActive(null);

  return (
    <div className="flex h-screen relative">
      {isSidebarOpen && (
        <Sidebar
          closeSidebar={() => setIsSidebarOpen(false)}
          history={history}
          setActive={setActive}
          startNewChat={startNewChat}
        />
      )}

      {/* floating hamburger when closed */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-black text-white hover:bg-gray-800"
        >
          <FiMenu size={24} />
        </button>
      )}

      <div className="flex-1">
        <MainBody
          history={history}
          setHistory={setHistory}
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  );
}
