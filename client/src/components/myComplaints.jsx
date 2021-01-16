import { React, useState, useEffect } from 'react';
import './existingComplaints.css';
import { Navbar, Nav, Table} from 'react-bootstrap';
import axios from 'axios';

const MyComplaints = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/complaints').then(json => setData(json.data));
    }, [])
    const renderTable = () => {
        return data.map(complaint => {
        return (
            <tr>
            <td>{complaint.createdAt.substring(0, 10)}</td>
            <td>{complaint.title}</td>
            <td>{complaint.complaint_address}</td> 
            <td>{complaint.complaint_city}</td> 
            <td>{complaint.backer.length}</td>
            </tr>
        )
        })
    }
    return(
        <div style={{height:"100vh",backgroundColor:"rgb(0, 0, 0, 0.9)"}}>
            <Navbar style={{backgroundColor:"black"}}>
                <Navbar.Brand style={{color:"white"}}>Bombay Municipal Corporation</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/complains" style={{color:"white",paddingLeft:"12rem"}}>Register a Complaint</Nav.Link>
                    <Nav.Link href="/existing-complaints" style={{color:"white"}}>Existing Complaints</Nav.Link>
                    <Nav.Link href="/my-complaints" style={{color:"white"}}>My Complaints</Nav.Link>
                </Nav>
            </Navbar>
            <div id="complaint-card">
                <Table responsive="sm" style={{marginTop:"2rem",color:"white"}} id="existing-complaints">
                    <thead>
                        <tr>
                            <th>Date of the Complaint</th>
                            <th>Title</th>
                            <th>Description of the Complaint</th>
                            <th>Address of the Complaint</th>
                            <th>Number of upvotes</th>
                        </tr>
                    </thead>
                    <tbody>{renderTable()}</tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyComplaints;