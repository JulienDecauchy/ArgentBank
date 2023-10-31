import React from "react";
import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";
import LoginForm from "../../Components/LoginForm/LoginForm";

import iconUser from "../../assets/img/icon-user.png"

function Login() {
    return (
        <>
            <Header />
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <img src={iconUser} className="icon_user-2" alt="circleuser" />
                    <h1>Sign In</h1>
                    <LoginForm />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Login