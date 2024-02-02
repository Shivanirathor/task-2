import React, { useState } from "react";
import "../styles/AllPages.css";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const name = localStorage.getItem("name");
    const newPasswod = localStorage.getItem("password");
    if (name === username && newPasswod === password) {
      navigate("/account");
    } else {
      alert("username or password incorrect!");
    }
  }
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="container">
      <h1 className="heading">Login</h1>

      <div className="input-container">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

      <button className="button-container" onClick={handleLogin}>
        Login
      </button>
      <p onClick={handleRegister}>Register</p>
    </div>
  );
};

export default LoginPage;
