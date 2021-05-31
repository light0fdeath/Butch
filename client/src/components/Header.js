import Login from '../pages/Login';
import Signup from '../pages/Signup';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Delivery from '../pages/Delivery';
import Meat from '../pages/Meat';
import Spices from '../pages/Spices';
import Pickles from '../pages/Pickles';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/style.css';
import {Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './assets/images/logo.png';
import {Container, Row, Col} from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header_text">
                    <div className="header_contact">
                        <span><i className="bi bi-telephone"></i>(02) 9585 2831</span>
                        <span>kathmandubutchery@gmail.com</span>
                    </div>
                    <div className="header_form">
                    
                    <Button variant="primary"><Link to={`Login`}>Login</Link></Button>
                    <Button variant="primary"><Link to={`Signup`}>Signup</Link></Button>
                    
                    </div>
                </div>
                <div className="logo"><img src={logo} /></div>
                <div className="d-flex justify-content-center">
                    <Navbar bg="orange" expand="lg" >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><Link to={``}>Home</Link></Nav.Link>
                                <NavDropdown title="Our Products" id="basic-nav-dropdown">
                                    <NavDropdown.Item><Link to={`Meat`}>Meat Items</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to={`Spices`}>Spices</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to={`Pickles`}>Pickles</Link></NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link><Link to={`Delivery`}>Delivery</Link></Nav.Link>
                                <Nav.Link><Link to={`About`}>About Us</Link></Nav.Link>
                                <Nav.Link><Link to={`Contact`}>Contact Us</Link></Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>


            </div>
        )
    }
}