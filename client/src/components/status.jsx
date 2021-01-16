import { React,useState, useEffect } from 'react';
import { Navbar, Nav, Table } from 'react-bootstrap';
import axios from 'axios';
import './general.css'

const Status = () => {
    const [data, setData] = useState([])
    const [status, setStatus] = useState(0)
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
                            <Nav.Link href="/login" onClick={() => {localStorage.removeItem("token")}} style={{color:"white"}} class="nav-link" >Logout</Nav.Link>
                            </li>
                        </ul>
                    </div>
            </Navbar>
            <div className="table-card">
                <Table responsive="sm" style={{marginTop:"5rem",color:"white"}} id="existing-complaints">
                        <tbody>
                            <tr>
                                <td style={{ backgroundColor: 1<=status ? "green" : "rgb(0, 0, 0, 0.8)", padding: '2.5rem'}}>1. Complaint Acknowledged</td>
                                <td style={{ backgroundColor: 2<=status ? "green" : "rgb(0, 0, 0, 0.8)", padding: '2.5rem'}}>2. Investigation handed to Agency</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 3<=status ? "green" : "rgb(0, 0, 0, 0.8)", padding: '2.5rem'}}>3. Agency Investigation Completed</td>
                                <td style={{ backgroundColor: 4<=status ? "green" : "rgb(0, 0, 0, 0.8)", padding: '2.5rem'}}>4. Problem identified</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 5<=status ? "green" : "rgb(0, 0, 0, 0.8)", padding: '2.5rem'}}>5. Funds and requirements asked from Government</td>
                                <td style={{ backgroundColor: 6<=status ? "green" : "rgb(0, 0, 0, 0.8)", padding: '2.5rem'}}> 6. Funds transferred to agency</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 7<=status ? "green" : "rgb(0, 0, 0, 0.8)", padding: '2.5rem'}}>7. Agency working on location</td>
                                <td style={{ backgroundColor: 8<=status ? "green" : "rgb(0, 0, 0, 0.8)", padding: '2.5rem'}}>8. Issue resolved from agency</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 9<=status ? "green" : "rgb(0, 0, 0, 0.8)", padding: '2.5rem'}}>9. Approval from government</td>
                                <td style={{ backgroundColor: 10<=status ? "green" : "rgb(0, 0, 0, 0.8)", padding: '2.5rem'}}>10. Issure resolved</td>
                            </tr>
                        </tbody>
                    </Table>
            </div>
        </div>
    );
}

export default Status;