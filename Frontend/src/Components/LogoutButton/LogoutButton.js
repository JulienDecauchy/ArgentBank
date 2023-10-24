import React, { useState } from "react";
import { useStore } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../store/userStore";


function LogoutButton() {
    const [userName, setUserName] = useState()

    const store = useStore()
    store.subscribe(() => setUserName(store.getState()?.user?.data?.firstName))

    const Logout = () => {
        logoutUser(store)
    }

    return (
        <div className="main-nav-logout">
            <NavLink className="main-nav-item" to="/User">
                <i class="fa-solid fa-right-from-bracket">{userName}</i>
            </NavLink>
            <NavLink className="main-nav-item" onClick={Logout} to="/">Sign Out</NavLink>
        </div>
    )
}

export default LogoutButton