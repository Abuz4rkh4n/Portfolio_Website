import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <div className=" overflow-y-scroll w-full bg-black-background">
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
