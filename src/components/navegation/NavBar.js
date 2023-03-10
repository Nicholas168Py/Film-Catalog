import React from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = ()=>{
    return (
        <React.Fragment>
            {['sm'].map((expand) => (
                <Navbar key={expand} bg="dark" expand={expand} className='navbar'>
                <Container fluid>
                    <Navbar.Brand>
                        <Link to= '/'>
                            <img
                                src="./white-logo.png"
                                width="50"
                                className="d-inline-block align-top m-2"
                                alt="logo"
                            />
                            <span className='name'>React Cinema</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            <Link to= '/'>
                                <img
                                    src="./logo.png"
                                    width="50"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                                <span className='name'>React Cinema</span>
                            </Link>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link className='navItems' to='/'>Home</Link>
                            <Link className='navItems' to='/PreSale'>PreSale</Link>
                            <Link className='navItems' to='/Popular'>Popular</Link>
                        </Nav><Form className="d-flex d-sm-none ">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>
            ))}
        </React.Fragment>
    )
}

export default NavBar;