import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();
  const [disableName, setDisableName] = useState(true);
  const [disableEmail, setDisableEmail] = useState(true);
  const nameLocalStorage = localStorage.getItem("name");
  const emailLocalStorage = localStorage.getItem("email");
  const [username, setUserName] = useState(nameLocalStorage);
  const [email, setEmail] = useState(emailLocalStorage);

  const savedData = () => {
    localStorage.setItem("name", username);
    localStorage.setItem("email", email);
    setDisableName(true);
    setDisableEmail(true);
  };
  return (
    <div className="container">
      <h1 className="heading">Account Information</h1>
      <div className="input-container">
        <label htmlFor="usernameLabel">Username:</label>
        <input
          type="text"
          value={username}
          disabled={disableName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setDisableName(false);
          }}
        >
          edit
        </button>
      </div>
      <div className="input-container">
        <label htmlFor="usernameLabel">Email:</label>
        <input
          type="text"
          value={email}
          disabled={disableEmail}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button
        className="btn"
          onClick={() => {
            setDisableEmail(false);
          }}
        >
          edit
        </button>
      </div>
      <button className="button-container" onClick={savedData}>
        Save Changes
      </button>
      <button
      className="button-container-log"
        onClick={() => {
          navigate("/");
        }}
      >
        logout
      </button>
    </div>
  );
};
export default AccountPage;
