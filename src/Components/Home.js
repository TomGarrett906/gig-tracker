//Home.js

import React from "react";
import Navbar from "./Navbar";
import Logo from "../Assets/gigfulllogo.png"

const Home = () => {
  return (
    <div className="Home">
        <h1>Welcome to</h1>
      <div className="Container">
      <img className="Logo" src={Logo} alt="Gig Tracker Logo"></img>
        <h2>Your go-to platform for automating gig
          payments and simplifying your freelance journey.</h2>
      </div>
      <Navbar />
    </div>
  );
};
export default Home;
