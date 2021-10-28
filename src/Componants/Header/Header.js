import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Tour Lovers</Navbar.Brand>
                    <Nav className="ms-auto text-white">
                        <Nav.Link to="/home">Home</Nav.Link>
                        <Nav.Link to="/features">Offer</Nav.Link>
                        <Nav.Link to="/pricing">Place Order</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {/* Banner Section Carosel */}
            <Banner></Banner>
        </div>
    );
};

export default Header;