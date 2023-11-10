import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userName } from "../../Redux/userAPI";
import Account from "../../Components/Account/accout";
import accountData from "../../Components/Account-Data/account-data";
import { useNavigate } from "react-router-dom";

function User() {

    const user = useSelector((state) => state.user);
    const [isEditing, setIsEditing] = useState(false);
    const [newUserName, setNewUserName] = useState(user.userName);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dataToken = useSelector((state) => state.token);

    useEffect(() => {
        if (dataToken === null) {
            navigate("/Login")
        }
        return
      }, []);

    const handleEditClick = () => {
        setIsEditing(!isEditing)
    }

    const handleSubmitClick = () => {
        dispatch(userName(newUserName));
        setIsEditing(false);
    };

    const tag = `${user.userName}`;

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
                {accountData.map(({ title, content, description }) => (
                    <Account
                        key={title}
                        title={title}
                        content={content}
                        description={description}
                    />
                ))}
            </main>
        </>
    )
}

export default User