import { React, useState } from 'react';
import './general.css';
import { Navbar, Nav, Table} from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const Complains = () => {
    const history = useHistory();
const [complaints, setComplaints] = useState({

    complaintType:"",
    emergencyState:"",
    complaintTitle:"",
    description:"",
    house:"",
    street:"",
    area:"",
    pincode:"",
    city:"",
    landmark:"",
    complainantHouse:"",
    complainantStreet:"",
    complainantArea:"",
    complainantPincode:"",
    complainantCity:"",
    complainantLandmark:""
    
});

const {
    complaintType,
    emergencyState,
    complaintTitle,
    description,
    house,
    street,
    area,
    pincode,
    city,
    landmark,
    complainantHouse,
    complainantStreet,
    complainantArea,
    complainantPincode,
    complainantCity,
    complainantLandmark
} = complaints; 

const onChange = e => setComplaints({...complaints,[e.target.name]:e.target.value})

const onSubmit = async () =>{
    const newComplaint = {
        "title": complaintType,
        "description": description,
        "emergencyState": emergencyState,
        "complaint_house": house,
        "complaint_street": street,
        "complaint_area": area,
        "complaint_pin": pincode,
        "complaint_landmark": landmark,
        "complaint_city": city,
        "complainant_house_no": complainantHouse,
        "complainant_street": complainantStreet,
        "complainant_area": complainantArea,
        "complainant_pin": complainantPincode,
        "complainant_landmark": complainantLandmark,
        "complainant_city": complainantCity
    }
    try{
        const config = {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem('token')
            }
        }
        const res = await axios.post('/complaints', newComplaint, config);
            if(res.data.success){
                console.log(res)
                history.push('/my-complaints');
            }else{
                alert(res.error.msg)
            }
        }catch(err){
            console.error(err);
        }
}


    return(
        <div>
            <Navbar style={{backgroundColor:"black"}}>
                    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Navbar.Brand class="nav-link" style={{color:"white"}}>Bombay Municipal Corporation</Navbar.Brand>
                            </li>
                        </ul>
                    </div>
                    <div class="mx-auto">
                        
                        <Nav>
                            <Nav.Link href="/complains" style={{color:"white",paddingLeft:"1rem"}} class="navbar-brand mx-auto" >Register a Complaint</Nav.Link>
                            
                            <Nav.Link href="/existing-complaints" style={{color:"white",paddingLeft:"2rem"}} class="navbar-brand mx-auto" >Existing Complaints</Nav.Link>
                            
                            <Nav.Link href="/my-complaints" style={{color:"white",paddingLeft:"2rem"}} class="navbar-brand mx-auto" >My Complaints</Nav.Link>
                            <Nav.Link href="/my-issues" style={{color:"white",paddingLeft:"2rem"}} class="navbar-brand mx-auto" >Issues Assigned</Nav.Link>
                        </Nav>
                    </div>
            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <Nav.Link href="/" onClick={() => {localStorage.removeItem("token")}} style={{color:"white"}} class="nav-link" >Logout</Nav.Link>
                    </li>
                </ul>
            </div>
            </Navbar>
                    <div className="complaint-card">
                        <h1 style={{color:"white"}}>Application to lodge a Complaint</h1>
                        <Table responsive="sm" style={{margin:"2rem",color:"white"}}>
                            <thead>
                            <tr>
                                <th style={{fontSize: "30px"}} colspan="5">Define Nature of the Complaint</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{width:"20px"}}>Select Complaint Type</td>
                                    <td >
                                        <select id="complaint-type" className="stakeholder" name="complaintType" onChange={e => onChange(e)} value={complaintType} required>
                                            <option value="" disabled selected>Select Complaint type</option>
                                            <option value="potholes">Potholes</option>
                                            <option value="traffic">Traffic</option>
                                            <option value="road">Condition of the Road</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </td>
                                    <td></td> 
                                    <td style={{width:"20px"}}>State of Emergency</td>
                                    <td>
                                        <select id="complaint-type" className="stakeholder" name="emergencyState" onChange={e => onChange(e)} value={emergencyState} required>
                                            <option value="" disabled selected>Select</option>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                            <option value="death">Death</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Title of the Complaint</td>
                                    <td><input type="text" name="complaintTitle" className='complain-input' onChange={e => onChange(e)} value={complaintTitle} required/></td>  
                                    <td></td>  
                                    <td>Description of the Complaint</td>
                                    <td><textarea class="textarea" rows="3" cols="30" id="description" name="description" onChange={e => onChange(e)} value={description} required></textarea></td>
                                </tr>
                            </tbody>
                            <thead>
                            <tr>
                                <th style={{fontSize: "30px"}} colspan="5">Specify Location of the Complaint</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >House Number</td>
                                    <td><input type="text" className='complain-input' name="house" onChange={e => onChange(e)} value={house} required/></td>   
                                    <td></td>                                
                                    <td style={{width:"30px"}}>Street</td>
                                    <td><input type="text" name="street" className='complain-input' onChange={e => onChange(e)} value={street} required/></td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td><input type="text" name="area" className='complain-input' onChange={e => onChange(e)} value={area} required/></td>
                                    <td></td> 
                                    <td>Pincode</td>
                                    <td><input type="text" name="pincode" className='complain-input' onChange={e => onChange(e)} value={pincode} required/></td>
                                </tr>
                                <tr>
                                    <td>Landmark</td>
                                    <td><input type="text" name="landmark" className='complain-input' onChange={e => onChange(e)} value={landmark} required/></td>
                                    <td></td> 
                                    <td>City</td>
                                    <td><input type="text" name="city" className='complain-input' onChange={e => onChange(e)} value={city} required/></td>
                                </tr>
                            </tbody>
                            <thead>
                            <tr>
                                <th style={{fontSize: "30px"}} colspan="5">Address of the Complainant</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>House Number</td>
                                    <td><input type="text" name="complainantHouse" className='complain-input' onChange={e => onChange(e)} value={complainantHouse} required/></td>
                                    <td></td> 
                                    <td>Street</td>
                                    <td><input type="text" name="complainantStreet" className='complain-input' onChange={e => onChange(e)} value={complainantStreet} required/></td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td><input type="text" name="complainantArea" className='complain-input' onChange={e => onChange(e)} value={complainantArea} required/></td>
                                    <td></td> 
                                    <td>Pincode</td>
                                    <td><input type="text" name="complainantPincode" className='complain-input' onChange={e => onChange(e)} value={complainantPincode} required/></td>
                                </tr>
                                <tr>
                                    <td>Landmark</td>
                                    <td><input type="text" name="complainantLandmark" className='complain-input' onChange={e => onChange(e)} value={complainantLandmark} required/></td>
                                    <td></td> 
                                    <td>City</td>
                                    <td><input type="text" name="complainantCity" className='complain-input' onChange={e => onChange(e)}  value={complainantCity} required/></td>
                                </tr>
                            </tbody>
                        </Table>

                        <button type="button"className="btn btn-primary" onClick={(e) => onSubmit(e)}>Submit</button>
                        
                    </div>
        </div>
        
    );
    
}

export default Complains;






