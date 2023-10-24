import React, { useState } from "react";
import { useStore } from "react-redux";

import iconBank from "../../assets/img/argentBankLogo.png"
import { NavLink } from "react-router-dom";

import LoginButton from "../LoginButton/LoginButton";

function Header() {
    const [hasToken, setHasToken] = useState(false)
    const store = useStore()
    store.subscribe(() => {
        setHasToken(store.getState().user?.token?.length)
    })

    return (
        <header>
            <nav className="main-nav">
                <NavLink to={"/"}>
                    <div className="main-nav-logo">
                        <img
                            className="main-nav-logo-image"
                            src={iconBank}
                            alt="Argent Bank Logo"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                    </div>
                </NavLink>
                <LoginButton />
            </nav>
        </header>
    )
}

export default Header