import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase'
import Banner from '../Banner/Banner';

const Header = () => {
    const { user, logOut } = useFirebase()

    return (
        <div>
            <Navbar bg="dark" sticky="top" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand to="/home">Tour <span className="text-warning">Lovers</span> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="text-white text-decoration-none pe-4" to="/">Home</Nav.Link>
                        <Nav.Link className="text-white text-decoration-none pe-4" as={Link} to="/offers">Offers</Nav.Link>
                        <Nav.Link className="text-white text-decoration-none" as={Link} to="/placeorder#placeorder">Place Order</Nav.Link>
                        {
                            !user.displayName ?
                                <Nav.Link className="text-white text-decoration-none" as={Link} to="/signin">Sign In</Nav.Link>
                                :
                                <>
                                    <button onClick={logOut}>Sign Out</button>

                                    <p className='text-white mb-0'>
                                        Signed in as: {user.displayName}

                                    </p>
                                </>

                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;