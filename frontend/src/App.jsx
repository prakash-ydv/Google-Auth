import React from "react";
import AllRoutes from "./AllRoutes";
import "./App.css"; 

const App = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col bg-zinc-700 ">
      <AllRoutes />
    </div>
  );
};

export default App;
