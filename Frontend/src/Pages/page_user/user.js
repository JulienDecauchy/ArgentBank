import React from "react";
import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";
import { useStore } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { userProfile, logoutUser } from "../../store/userStore";
import { useEffect, useState } from "react";

function User() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const store = useStore()
    const navigate = useNavigate()

    const token = store.getState().user.token

    useEffect(() => {
      const callUserProfile = async () => {
        await userProfile(token)

        if (store.getState().user?.status === 'resolved') {
          const user = store.getState().user?.data
          setFirstName(user?.firstName)
          setLastName(user?.lastName)
        } else {
          logoutUser(store)
          navigate('/login')
        }
      }
      callUserProfile()
    }, [token, store, navigate])

    return (
        <>
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{firstName} {lastName}!</h1>
                    <button className="edit-button">Edit Name</button>
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