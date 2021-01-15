import { React } from 'react';
import './general.css';
import { Navbar, Nav, Table} from 'react-bootstrap';
import $ from 'jquery';


const Complains = () => {

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Bombay Municipal Corporation</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/complains">Register a Complaint</Nav.Link>
                    <Nav.Link href="/existing-complains">Existing Complaints</Nav.Link>
                </Nav>
            </Navbar>
            
                    <div className="complaint-card">
                        <h2 style={{color:"white"}}>Application to lodge a Complaint</h2>
                        <Table responsive="sm" style={{margin:"2rem",color:"white"}}>
                            <thead>
                            <tr>
                                <th style={{fontSize: "25px"}} colspan="5">Define Nature of the Complaint</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{width:"20px"}}>Select Complaint Type</td>
                                    <td >
                                        <select id="complaint-type" className="stakeholder">
                                            <option value="" disabled selected>Select Complaint type</option>
                                            <option value="">Potholes</option>
                                            <option value="">Traffic</option>
                                            <option value="">Condition of the Road</option>
                                            <option value="">Others</option>
                                        </select>
                                    </td>
                                    <td></td> 
                                    <td style={{width:"20px"}}>State of Emergency</td>
                                    <td>
                                        <select id="complaint-type" className="stakeholder">
                                            <option value="" disabled selected>Select</option>
                                            <option value="">Low</option>
                                            <option value="">Medium</option>
                                            <option value="">High</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Title of the Complaint</td>
                                    <td><input type="text" /></td>  
                                    <td></td>  
                                    <td>Description of the Complaint</td>
                                    <td><textarea class="textarea" rows="5" cols="30" id="description"></textarea></td>
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
                                    <td><input type="text" /></td>   
                                    <td></td>                                
                                    <td style={{width:"30px"}}>Street</td>
                                    <td><input type="text" /></td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td><input type="text" /></td>
                                    <td></td> 
                                    <td>Pincode</td>
                                    <td><input type="text" /></td>
                                </tr>
                                <tr>
                                    <td>Landmark</td>
                                    <td><input type="text" /></td>
                                    <td></td> 
                                    <td>City</td>
                                    <td><input type="text" /></td>
                                </tr>
                            </tbody>
                            <thead>
                            <tr>
                                <th style={{fontSize: "25px"}} colspan="5">Address of the Complainant</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>House Number</td>
                                    <td><input type="text" /></td>
                                    <td></td> 
                                    <td>Street</td>
                                    <td><input type="text" /></td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td><input type="text" /></td>
                                    <td></td> 
                                    <td>Pincode</td>
                                    <td><input type="text" /></td>
                                </tr>
                                <tr>
                                    <td>Landmark</td>
                                    <td><input type="text" /></td>
                                    <td></td> 
                                    <td>City</td>
                                    <td><input type="text" /></td>
                                </tr>
                            </tbody>
                        </Table>
                        <button type="button"className="btn btn-primary">Submit</button>
                        
                    </div>
        </div>
        
    );
    
}

export default Complains;