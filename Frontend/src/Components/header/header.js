import React from "react";

import iconBank from "../../assets/img/argentBankLogo.png"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav class="main-nav">
                <NavLink to={"/"}>
                    <div class="main-nav-logo">
                        <img
                            class="main-nav-logo-image"
                            src={iconBank}
                            alt="Argent Bank Logo"
                        />
                        <h1 class="sr-only">Argent Bank</h1>
                    </div>
                </NavLink>
                <div>
                    <NavLink to={"/Login"}>
                            <i class="fa fa-user-circle main-nav-item"></i>
                            Sign In
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header