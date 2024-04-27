import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { Navigate } from "react-router-dom"; // Import the Navigate component

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState(null); // State to hold the error message
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  onAuthStateChanged(auth, (currentUser) => {
    // setUser(currentUser); // No need to set the user state here since it's not being used
  });

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const user = userCredential.user;
      console.log(user);
      setIsLoggedIn(true); // Set login status to true
    } catch (error) {
      console.log(error.message);
      setError("Invalid email or password"); // Set the error message state
    }
  };

  // Redirect to Profile component if user is logged in
  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="Login">
      <div className="Container">
        <div className="Forms">
          <form>
            <input
              type="email"
              placeholder="email"
              id="email"
              name="email"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              name="password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </form>
          <button type="submit" className="SubmitButton" onClick={login}>
            Login
          </button>
          {/* Display the error message if it exists */}
          {error && <span>{error}</span>}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Login;
