import React from 'react';
import './login.css';
import { Link } from "react-router-dom";
import $ from 'jquery';

const Register = () => {

    function componentDidMount() {
        $(function() {
            $("#stakeholder-field").on("change",function() {
                $('input[name="stakeholder"]').toggle(this.value == "other");
            });
        });
    }
    
    
    return(
        <div className="main-card">
                <div className="column">
                    <div className="login-card">
                        <h1 className="heading">Register</h1>
                        <div className="column">       
                            <input type="text" placeholder="Enter First Name" name="firstname" required />                       
                        </div>
                        <div className="column">       
                            <input type="text" placeholder="Enter Last Name" name="lastname" required />                       
                        </div>
                        <div className="column">       
                            <input type="text" placeholder="Enter Email ID" name="email" />                       
                        </div>
                        <div className="column">       
                            <input type="text" placeholder="Enter Phone Number" name="phone-number" required />                       
                        </div>
                        <div className="column">       
                            <select id="stakeholder-field" className="stakeholder">
                                <option value="" disabled selected>Enter Membership Type</option>
                                <option value="">General Citizen</option>
                                <option value="">Member of agency</option>
                                <option value="">Government Official</option>
                            </select>
                            {/* <input type="text" name="stakeholder" placeholder="Enter "/>                       */}
                        </div>
                        <div className="column">
                            <input type="password" placeholder="Enter Password" name="password" required />
                        </div>
                        <div className="column">
                            <button type="button"className="btn btn-primary">Register</button>
                        </div>
                        <Link to="/" style={{ color:"black"}}>Already have an account? Login</Link>
                    </div>
                </div>
            
        </div>
    );
}

export default Register;