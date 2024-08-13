import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="flex">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
