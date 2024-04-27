import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";


const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="Profile">
      <div className="Container">
        <h2>Profile: {user && user.email}</h2>
        
      </div>
      <Navbar />
    </div>
  );
};

export default Profile;
