import React from "react";
import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";
import LoginForm from "../../Components/LoginForm/LoginForm";

function Login() {
    return (
        <>
            <Header />
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <i class="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <LoginForm />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Login