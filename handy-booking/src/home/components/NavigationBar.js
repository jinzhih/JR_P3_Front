import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }
    
    .navbar-brand, .navbar-nav .nav-link{
        color: #bbb;

        &:hovor{
            color: white;
        }
    }
`;

const NavigationBar = () => {
    return (
        <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Code life</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/users">Users</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/signup/user">Login</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
    )
};

export default NavigationBar;