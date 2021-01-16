import React,{ useState } from 'react';
import './login.css';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const history = useHistory();
    const [registerData, setRegister] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phoneNumber:"",
        stakeholder:"",
        password:""
    })

    const {
        firstname,
        lastname,
        email,
        phoneNumber,
        stakeholder,
        password
    } = registerData;
    
    const onChange = e => setRegister({...registerData,[e.target.name]:e.target.value})

    

    const onSubmit = async() => {
        const newUser = {
            "username": phoneNumber,
            "firstName": firstname,
            "lastName": lastname,
            "email": email,
            "public":true,
            "agency":false,
            "gov":false,
            "password":password
        }
        if(newUser.stakeholder === 'agency'){
            newUser.agency=true;
            newUser.public=false;
            newUser.gov=false;
        }
        else if(stakeholder === 'gov'){
            newUser.agency=false;
            newUser.public=false;
            newUser.gov=true;
        }
        try{
            const res = await axios.post('/users/register', newUser);
            if(res.data.success){
                history.push('/login');
            }
        }catch(err){
            console.error(err.response.data);
        }
    }

    return(
        <div style={{width: "100vw", height: '100vh', backgroundColor: 'black'}}>
            <h1 className="heading" style={{color:"white",paddingTop:"4rem",paddingBottom:"0px"}}>Bombay Municipal Corporation (Road Department)</h1>
            <div className="main-card">
                <div className="column">
                    <div className="login-card">
                        <h1 className="heading" style={{color:"white"}}>Register</h1>
                        <div className="column">       
                            <input type="text" placeholder="Enter First Name" name="firstname" value={firstname} onChange={e => onChange(e)} required />                       
                        </div>
                        <div className="column">       
                            <input type="text" placeholder="Enter Last Name" name="lastname" value={lastname} onChange={e => onChange(e)} required />                       
                        </div>
                        <div className="column">       
                            <input type="text" placeholder="Enter Email ID" name="email" value={email} onChange={e => onChange(e)}/>                       
                        </div>
                        <div className="column">       
                            <input type="text" placeholder="Enter Phone Number" name="phoneNumber" value={phoneNumber} onChange={e => onChange(e)} required />                       
                        </div>
                        <div className="column">       
                            <select id="stakeholder-field" className="stakeholder" name="stakeholder" onChange={e => onChange(e)} value={stakeholder}>
                                <option value="" disabled selected>Enter Membership Type</option>
                                <option value="public">General Citizen</option>
                                <option value="agency">Member of agency</option>
                                <option value="gov">Government Official</option>
                            </select>
                        </div>
                        <div className="column">
                            <input type="password" placeholder="Enter Password" name="password" onChange={e => onChange(e)} value={password}required />
                        </div>
                        <div className="column">
                            <button type="button"className="btn btn-primary" onClick={e => onSubmit(e)}>Register</button>
                        </div>
                        <Link to="/" style={{ color:"white"}}>Already have an account? Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;