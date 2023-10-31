import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActivateButton from "../ActivateButton/ActivateButton";
import { Login } from "../../Redux/userAPI";
import { getProfile } from "../../Redux/userAPI";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.isAuthenticated);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="form">
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <ActivateButton title="Sign In" action={Form}/>
      </div>
    )
  }
  
  export default LoginForm