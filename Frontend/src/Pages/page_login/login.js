import React from "react";
import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";
import { NavLink } from "react-router-dom";

function Login() {
    return (
        <>
            <Header />
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <i class="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div class="input-wrapper">
                            <label for="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div class="input-wrapper">
                            <label for="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div class="input-remember">
                            <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
                        </div>
                        <NavLink to={"/User"}><button class="sign-in-button">Sign In</button></NavLink>
                        {/*<button class="sign-in-button">Sign In</button>*/}
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Login