import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";

import iconUser from "../../assets/img/icon-user.png"

function Login() {
    return (
        <>
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <img src={iconUser} className="icon_user-2" alt="circleuser" />
                    <h1>Sign In</h1>
                    <LoginForm />
                </section>
            </main>
        </>
    )
}

export default Login