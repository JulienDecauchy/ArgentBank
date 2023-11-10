import React, { useState, useEffect } from "react";
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
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      document.querySelector(".submit_error_username").innerHTML = "Enter Username";
    }
    if (!password) {
      document.querySelector(".submit_error_password").innerHTML = "Enter Password";
      return;
    }
    if (isAuthenticated === false) {
      document.querySelector(".submit_error_authenticated").innerHTML = "Error: Unkown User";
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

  useEffect(() => {
    const rememberMeCookie = Cookies.get("rememberMe");
    if (rememberMeCookie) {
      setRememberMe(!rememberMe);
      const { username, password } = JSON.parse(rememberMeCookie);
      setUsername(username);
      setPassword(password);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated === true && window.location.pathname !== "/Profile") {
      dispatch(getProfile());
      navigate("/Profile");
    }
  }, [isAuthenticated, dispatch, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="submit_error_username"></div>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          autoComplete="true"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="submit_error_password"></div>
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
      <div className="submit_error_authenticated"></div>
    </form>
  )
}

export default LoginForm