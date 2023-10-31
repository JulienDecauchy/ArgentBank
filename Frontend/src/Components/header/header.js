import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/userAPI"

import iconBank from "../../assets/img/argentBankLogo.png"
import iconUser from "../../assets/img/icon-user.png"
import iconRightBracket from "../../assets/img/icon-RightBracket.png"


function Header() {
    const ActiveLink = useLocation();
    const { isAuthenticated, user } = useSelector((state) => state);
    const { userName } = user;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <nav className="main-nav">
            <Link
                to="/"
                className={`main-nav-logo ${ActiveLink.pathname === "/" ? "actif" : ""}`}
            >
                <img
                    className="main-nav-logo-image"
                    src={iconBank}
                    alt="Argent Bank Logo"
                />
            </Link>
            <div className="nav-items">
                {!isAuthenticated && (
                    <Link
                        to="/login"
                        className={`main-nav-item ${ActiveLink.pathname === "/login" ? "actif" : ""
                            }`}
                    >
                        <img src={iconUser} className="circleuser" alt="circleuser" />
                        Sign In
                    </Link>
                )}

                {isAuthenticated && (
                    <Link to="/user" className="main-nav-item">
                        <img src={iconUser} className="circleuser" alt="circleuser" />
                        <p>{userName}</p>
                    </Link>
                )}

                {isAuthenticated && (
                    <div className="main-nav-item" onClick={handleLogout}>
                        <img
                            src={iconRightBracket}
                            className="rightbracket"
                            alt="rightbracket"
                        />
                        <a>Sign Out</a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Header