import { React } from 'react';
import './general.css';
import { Navbar, Nav} from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

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
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    );
    

}

export default General;