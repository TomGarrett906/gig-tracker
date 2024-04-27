// Register.js

import React, { useState } from "react";
import Navbar from "./Navbar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config"; // Correct import path

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");

  const [registerPassword, setRegisterPassword] = useState("");
  // const [registerUsername, setRegisterUsername] = useState("");

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="Register">
      <div className="Container">
        <div className="Forms">
          <h2>Create Account</h2>

          <form>
            <input
              type="email"
              placeholder="email"
              id="email"
              name="email"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />

            <input
              type="password"
              placeholder="password"
              id="password"
              name="password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </form>
          <button type="submit" className="SubmitButton" onClick={register}>
            Register
          </button>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Register;
