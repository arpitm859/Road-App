import { React } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import './general.css'
import image1 from './image1.jpg';
import image2 from './image1.jpg';

const LandingPage = () => {
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
            
            <div className="images-card">
                <Carousel>
                    <Carousel.Item id='qwerty' interval={2000}>
                        <img src = {image1} alt="Image1" className="d-block w-100 images"/>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img src = {image2} alt="Image2" className="d-block w-100 images"/>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img alt="Image3" src = {image2} className="d-block w-100 images"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default LandingPage;