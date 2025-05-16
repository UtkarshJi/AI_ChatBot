// import React from "react";

// const Sidebar = () => (
//   <div className="bg-black text-white h-screen p-4">
//     <button
//       className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer transition duration-200">
//       History
//     </button>
//   </div>
// );


// export default Sidebar;

import React from "react";

const Sidebar = () => (
  <div className="bg-black text-white h-screen p-4 w-64 flex flex-col">
    <h2 className="text-xl font-bold mb-6">My Sidebar</h2>
    <button
      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer transition duration-200 mb-3"
    >
      History
    </button>
    <button
      className="w-full bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded cursor-pointer transition duration-200 mb-3"
    >
      Dashboard
    </button>
    <button
      className="w-full bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded cursor-pointer transition duration-200 mb-3"
    >
      Settings
    </button>
    {/* Add more buttons or links here */}
  </div>
);

export default Sidebar;
