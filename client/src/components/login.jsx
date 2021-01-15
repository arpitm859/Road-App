import React from 'react';
import './login.css';
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="main-card">
                <div className="column">
                    <div className="login-card">
                        <h1 className="heading">Login</h1>
                        <div className="column">       
                            <input type="text" placeholder="Enter Phone Number" name="phone" required />                       
                        </div>
                        <div className="column">
                            <input type="password" placeholder="Enter Password" name="password" required/>
                        </div>
                        <div className="column">
                            <button type="button" className="btn btn-primary">Login</button>
                        </div>
                            <Link to="/register" style={{ color:"black" }}>Don't have an account? Sign Up</Link>
                    </div>
                </div>
        </div>
    );

}

export default Login;
