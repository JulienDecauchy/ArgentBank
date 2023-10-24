import React from "react";
import { NavLink } from "react-router-dom";

function LoginButton() {
    return (
        <div>
            <NavLink to={"/Login"}>
                <i className ="fa fa-user-circle main-nav-item"></i>
                Sign In
            </NavLink>
        </div>
    )
}

export default LoginButton