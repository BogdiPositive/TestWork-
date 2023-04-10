import React, { useEffect } from "react";

import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "undefined"
        ? localStorage.getItem("user")
        : null;
    if (!User) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
     <Route path="login" element={<Login />}/>
     <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
