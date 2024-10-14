import React, { useEffect } from "react";
import LoginSignUp from "./Components/LoginSignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSignUp />}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
