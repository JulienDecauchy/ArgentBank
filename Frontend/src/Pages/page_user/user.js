import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userName } from "../../Redux/userAPI";

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

    const tag = `${user.firstName} ${user.lastName}`;

    return (
        <>
            <main className="main bg-dark">
                <div className="user-form">
                    {isEditing ? (
                        <div className="edit-infos">
                            <h1>Edit user info</h1>
                            <div className="edit">
                                <div className="edit-form">
                                    <h3>Username : </h3>
                                    <input
                                        type="text"
                                        value={newUserName}
                                        onChange={(e) => setNewUserName(e.target.value)}
                                    />
                                </div>
                                <div className="edit-form">
                                    <h3>First name : </h3>
                                    <input type="text" value={user.firstName} disabled />
                                </div>
                                <div className="edit-form">
                                    <h3>Last name : </h3>
                                    <input type="text" value={user.lastName} disabled />
                                </div>
                            </div>
                            <div className="edit-buttons">
                                <button onClick={handleSubmitClick}>Save</button>
                                <button onClick={handleEditClick}>Cancel</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h1>Welcome back <br /> {tag} !</h1>
                            <button className="edit-button" onClick={handleEditClick}>
                                Edit Name
                            </button>
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
        </>
    )
}

export default User