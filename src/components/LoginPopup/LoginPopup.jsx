import { useState } from "react"
import "./LoginPopup.css";
import { assets } from "../../assets/assets"
const LoginPopup = ({ setshowLogin }) => {
    const [currentState, setCurrentState] = useState('Signup')
    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {
                        currentState === 'Login' ? (
                            <></>
                        ) : (
                            <input type="text" placeholder="Your Name" required />
                        )}
                    <input type="email" placeholder="Your E-mail" required />
                    <input type="password" placeholder="Your password" required />
                </div>
                <button>{currentState === "Signup" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By Continuing, I agree to the terms of use & privacy policy</p>
                    </div>
                 {
                    currentState === 'Login' ? (
                        <p >
                            Create new account?{""} <span className="login-popup-condition-color" onClick={() => setCurrentState("Signup")} > Click here</span> {""}
                        </p>
                    ) : (
                        <p >
                            Already have an account?{""} <span className="login-popup-condition-color" onClick={() => setCurrentState("Login")} > Login here</span> {""}
                        </p>
                    )}
                    
            </form>
        </div>
    )
}

export default LoginPopup