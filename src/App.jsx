// import React from "react";
// import Main_body from "./components/Main";
// import ChatInput from "./components/ChatInput";

// const App = () => (
//   <div>
//     <Main_body />
//   </div>
// );

// export default App;

import React from "react";
//import Sidebar from "./components/Sidebar";
import MainBody from "./components/Main";

const App = () => (
  <div className="flex h-screen">
    {/*<div className="w-64">
      <Sidebar />
    </div>*/}
    <div className="flex-1 flex flex-col">
      <MainBody />
    </div>
  </div>
);

export default App;
