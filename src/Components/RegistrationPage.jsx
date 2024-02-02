import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistered=()=>{
    navigate("/")
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("name", username);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
  }
  return (
    <div className="container">
      <h1 className="heading">Registration</h1>
      <p >Please fill out the form below to create an account.</p>

      <form action="/register" method="post">
        <div className="input-container">
          <label htmlFor="name">username: </label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email Address: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            id="confirm_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="button-container" onClick={handleRegistered}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
