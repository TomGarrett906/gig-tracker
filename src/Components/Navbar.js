//Navbar.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="Navbar">
      <Link className="NavLink" to="/">
        Home
      </Link>
      <Link className="NavLink" to="/about">
        About
      </Link>
      <Link className="RegisterButton" to="/register">
        Register
      </Link>
      
      {user ? (
        <div className="User">
      <Link className="NavLink" to="/profile">
        Profile
      </Link>
      <br/>
      <br/>
      <Link className="NavLink" to="/gigs">
        Gigs
      </Link>
          <h3>{user.email}</h3>
          <Link className="LogoutButton" onClick={logout} to={"/login"}>
            Logout
          </Link>
        </div>
      ) : (
        <Link className="LoginButton" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
