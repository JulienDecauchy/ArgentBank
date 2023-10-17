import React, { useState } from "react";
import ActivateButton from "../ActivateButton/ActivateButton";
import { useStore } from 'react-redux'
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const store = useStore()
    const navigate = useNavigate()

    const Form = async () => {
        await loginUser(store, email, password)
        navigate('/User')
      }
    

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
        <ActivateButton title="Sign In" />
      </div>
    )
  }
  
  export default LoginForm