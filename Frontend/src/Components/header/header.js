import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/userAPI"

import iconBank from "../../assets/img/argentBankLogo.png"
import iconUser from "../../assets/img/icon-user.png"
import iconRightBracket from "../../assets/img/icon-RightBracket.png"


function Header() {
    const lienActif = useLocation();
    const { isAuthenticated, user } = useSelector((state) => state);
    const { userName } = user;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <header>
            <nav className="main-nav">
                <Link to={"/"}>
                    <div className="main-nav-logo">
                        <img
                            className="main-nav-logo-image"
                            src={iconBank}
                            alt="Argent Bank Logo"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                    </div>
                </Link>
            </nav>
        </header>
    )
}

export default Header