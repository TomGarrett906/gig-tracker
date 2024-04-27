//App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import About from "./Components/About";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Gigs from "./Components/Gigs";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gigs" element={<Gigs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
