import { React,useState, useEffect } from 'react';
import { Navbar, Nav, Table } from 'react-bootstrap';
import axios from 'axios';
import './general.css'

const Status = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        const config = {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem('token')
            }
        }
        axios.get('/complaints/all', config).then(json => setData(json.data));
    }, [])

    return(
        <div style={{height:"100vh",backgroundColor:"rgb(0, 0, 0, 0.9)"}}>
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
                            <Nav.Link href="/login" style={{color:"white"}} class="nav-link" >Logout</Nav.Link>
                            </li>
                        </ul>
                    </div>
            </Navbar>
            <div className="table-card">
                <Table responsive="sm" style={{marginTop:"2rem",color:"white"}} id="existing-complaints">
                        <tbody>
                            <tr>
                                <td id="1">1. Complaint Acknowledged</td>
                                <td id="2">2. Investigation handed to Agency</td>
                            </tr>
                            <tr>
                                <td id="3">3. Agency Investigation Completed</td>
                                <td id="4">4. Problem identified</td>
                            </tr>
                            <tr>
                                <td >5. Funds and requirements asked from Government</td>
                                <td>6. Funds transferred to agency</td>
                            </tr>
                            <tr>
                                <td>7. Agency working on location</td>
                                <td>8. Issue resolved from agency</td>
                            </tr>
                            <tr>
                                <td>9. Approval from government</td>
                                <td>10. Issure resolved</td>
                            </tr>
                        </tbody>
                    </Table>
            </div>
        </div>
    );
}

export default Status;