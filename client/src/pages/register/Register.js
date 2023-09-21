/** @format */

import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const BaseURL = "http://localhost:5000";

export default function Register() {
  const [username, set_username] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [error, set_error] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    set_error(false);
    try {
      const res = await axios.post(`${BaseURL}/auth/register`, {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      set_error(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => set_username(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => set_email(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => set_password(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}
