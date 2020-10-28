import React from 'react'
import logodark from "./assets/logo.png"
import "./styles/Login.css"
import { Link } from "react-router-dom"
function Login() {
    return (
        <div className="login-page">
            <Link to="./">
                <img className="login-logo" src={logodark} alt=""></img>
            </Link>

            <div className="login">
                <form action="./api/login.php" className="sign-in-box">
                    <p className="sign-in-title">Sign-In</p>
                    <label className="email-label"><b>Email or mobile phone number</b></label>
                    <input className="text-input" type="text"></input>
                    <label className="email-label"><b>Password</b></label>
                    <input className="text-input" type="text"></input>
                    <button className="continue-button">Continue</button>
                    <p className="email-label">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <p className="or-label"> OR </p>
                    <button className="continue-button">Register</button>
                </form>

            </div>
        </div>
    )
}

export default Login