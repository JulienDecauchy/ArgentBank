import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/userAPI";
import { getProfile } from "../../Redux/userAPI";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      console.error("Erreur interne");
      return;
    }

    const handleRememberMe = (rememberMe, username, password) => {
      if (rememberMe) {
        Cookies.set(
          "rememberMe",
          JSON.stringify({ username, password }, { expires: 7 }),
          {
            secure: true,
            sameSite: "strict",
          }
        );
      } else {
        Cookies.remove("rememberMe");
      }
    };

    handleRememberMe(rememberMe, username, password);

    dispatch(login(username, password));
  };


  return (
    <div className="form">
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input 
          type="checkbox" 
          id="remember-me" 
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="transaction-button">
          Sign In
        </button>
    </div>
  )
}

export default LoginForm