import React, { Component } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";

import SideNav from  "../components/SideNav";


class NavBar extends Component {
    componentDidMount() {
        let elem = document.getElementById("navbar");
        elem.classList.add("is-sticky");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("is-sticky");
            } else {
                elem.classList.add("is-sticky");
            }
        });
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }

    closeNavbar() {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }
    render() {
        return (
            <React.Fragment>
                <Navbar
                    sticky="top"
                    id="navbar"
                    bg="light"
                    expand="lg"
                    className="navbar navbar-expand-lg navbar-light bg-light"
                    collapseOnSelect={true}
                >
                <Container>
                    <Navbar.Brand >
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                        >
                            <span>E</span>xolot
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        id="collaspe-btn"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                    
                                >
                                    Home
                                </Link>
                            </Nav.Item>
                            {/* <p><Link to ="/signup/user">UserSignUp</Link></p>
            <p><Link to ="/tradies">TradiePage</Link></p>
            <p><Link to ="/users">UserPage</Link></p>
            <p><Link to ="/tradies">TradieSignUp</Link></p>
            <p><Link to ="/orders">OrderPage</Link></p> */}
                            {/* <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    About
                                </Link>
                            </Nav.Item> */}

                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    Services
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="/tradies"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={event =>  window.location.href='/tradies'}
                                    href="/users"
                                >
                                    TradiePage
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="/users"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={event =>  window.location.href='/users'}
                                   
                                >
                                    UserPage
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="/signup/tradie"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={event =>  window.location.href='/signup/tradie'}
                                 
                                >
                                    TradieSignUp
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="/signup/user"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={event =>  window.location.href='/signup/user'}
                                  
                                >
                                    UserSignup
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    Contact
                                </Link>
                            </Nav.Item>
                                
                            <Nav.Item>
                                {/* SideNav: src/components/SideNav */}
                                <SideNav />
                                 
                            </Nav.Item>
                        </Nav> 
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </React.Fragment> 
    );
  }
}

export default NavBar;
