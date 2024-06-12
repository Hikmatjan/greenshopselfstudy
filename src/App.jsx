import React from "react";
import Navbar from "./components/navbar";
import Slide from "./components/navbar/slider";
import SideNav from "./components/sidenav";

const App = () => {
  return (
    <div className="w-[80%] m-auto">
      <Navbar />
      <Slide />
      <SideNav />
    </div>
  );
};

export default App;
