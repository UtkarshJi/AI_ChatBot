// import React from "react";

// const Sidebar = () => (
//     <div>
//         <button>New Chat</button>
//         <p>Made with Love by UtkarshJi</p>
//     </div>
// );

// export default Sidebar;

import React, { useState } from "react";
import { FaPlus, FaHeart, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-gray-900 text-white h-screen transition-all duration-300 ease-in-out flex flex-col items-start p-4 relative`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-2 text-white focus:outline-none"
      >
        <FaBars />
      </button>

      {/* Sidebar Content */}
      <div className="mt-12 space-y-6 w-full">
        <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition w-full">
          <FaPlus />
          {isOpen && <span>New Chat</span>}
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-300">
          <FaHeart className="text-pink-500" />
          {isOpen && <p>Made with Love by UtkarshJi</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
