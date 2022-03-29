import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Alert from "react-bootstrap/Alert";
import "./DashboardLogin.css"
import { useNavigate } from "react-router-dom";
import StandardPage from "../components/StandardPage";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            console.log(emailRef.current.value + " " +  passwordRef.current.value)
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch {
            setError("Failed to log in");
        }
        setLoading(false);
    }
    

    return (
        <StandardPage className="DashboardLogin-Login">
            <div className="DashboardLogin-Entry">
                <h3>Dashboard Login</h3>
            </div>
            <div className="DashboardLogin-Body">
                <div className="DashboardLogin-Credentials">
                    {error && <Alert className="" variant="danger">{error}</Alert>}
                    <form onSubmit={handleSubmit}>
                        <div className="DashboardLogin-Username">
                            <label htmlFor="usernameLabel">
                                Email<br/>
                            </label>
                        </div>
                            <input type="text" id="email" ref={emailRef} name="email" />
                    <br/>
                        <div className="DashboardLogin-Password">
                            <label htmlFor="passwordLabel">
                                Password<br/>
                            </label>
                        </div>
                        <input type="password" id="password" ref={passwordRef} name="password"/>
                        <br/>
                        <input type="submit" disabled={loading} name="submit" value="Login" />
                    </form>
                </div>
            </div>
        </StandardPage>
    );
}
