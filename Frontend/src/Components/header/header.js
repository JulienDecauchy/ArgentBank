import React from "react";

function Header() {
    return (
        <header>
            <nav>
                <a>
                    <img
                        src="./img/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1>Argent Bank</h1>
                </a>
                <div>
                    <a>
                        <i class="fa fa-user-circle"></i>
                        Sign In
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header