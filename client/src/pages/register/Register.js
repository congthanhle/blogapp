/** @format */

import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const URL = "http://localhost:5000";

/// co 1 mang n chu so. tim 2 so nguyen. tìm 1 cặp số có tích bằng 20

export default function Register() {
  const [username, set_username] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [error, set_error] = useState(false);
  const [hamtambay, set_hamtambay] = useState();
  const [truyenmang, set_truyenmang] = useState([]);

  // for(let i = 0; )

  //Xoa
  const hamtaolao = (a, b, c, d, e, f, g, h) => {
    const res = a + b + c + d + e + f + g + h;
    set_hamtambay(res);
  };

  const mangtaolao = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
        if (arr[i] * arr[j] == 20) {
          set_truyenmang(arr[i], arr[j]);
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    set_error(false);
    try {
      const res = await axios.post(`${URL}/auth/register`, {
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

        {/* Xoa */}
        <button onClick={hamtaolao(1, 2, 3, 4, 5, 6, 7, 8)}>
          {hamtambay ? hamtambay : 0}
        </button>
        {/* Truyen mang tam bay */}
        <button
          onClick={mangtaolao([
            1, 2, 3, 4, 5, 6, 7, 8, 3, 6, 8, 96, 5, 63, 5, 235, 235, 1,
          ])}
        >
          {truyenmang ? truyenmang : 0}
        </button>

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
