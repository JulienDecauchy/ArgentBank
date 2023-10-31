import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userName } from "../../Redux/userAPI";

import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";


function User() {

    const user = useSelector((state) => state.user);
    const [isEditing, setIsEditing] = useState(false);
    const [newUserName, setNewUserName] = useState(user.userName);
    const dispatch = useDispatch();

    const handleEditClick = () => {
        setIsEditing(!isEditing)
    }

    const handleSubmitClick = () => {
        dispatch(userName(newUserName));
        setIsEditing(false);
    };

    return (
        <>
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back !</h1>
                    {!editing && (
                        <div>
                            <span className="welcome">
                                {firstName} {lastName}
                            </span>
                            <br />
                            <ActivateButton title="Edit Name" action={EditData} />
                        </div>
                    )}
                    {editing && (
                        <div className="updateName-div">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                className="updateName"
                                id="firstName"
                                type="texte"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                className="updateName"
                                id="lastName"
                                type="texte"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <ActivateButton title="Save" action={saveName} />
                        </div>
                    )}
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default User