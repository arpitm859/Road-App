import { React } from 'react';
import './general.css';
import { Navbar, Nav} from 'react-bootstrap';

const General = () => {

    return(
        <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Bombay Municipal Corporation</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/complains">Register a Complaint</Nav.Link>
                <Nav.Link href="/existing-complains">Existing Complaints</Nav.Link>
            </Nav>
        </Navbar>
    </div>
    );
    

}

export default General;