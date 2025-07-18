import React from "react";
import Nav from "./pages/nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
