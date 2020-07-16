import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../components/NavBar";
import About from "../../components/About";
import Services from "../../components/Services";

import Footer from "../../components/Footer";
import ScrollUpBtn from "../../components/ScrollUpBtn";
import UserTask from "./UserTask";
import UserOrder from "./UserOrder";
import UserManageBar from "./UserManageBar";
import "../css/userBar.scss";
import UserProfileCard from "./UserProfileCard";
import ChangePassword from "./ChangePassword";
import ChangeProfile from "./ChangeProfile";

class UserView extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container>
          <div className="user-banner"> </div>
          <Row>
            <Col>
              <Row>
                <UserProfileCard />
                <UserManageBar />
              </Row>
              <Row>
                {/* About: src/components/About */}
                <About />
              </Row>
            </Col>
            <Col>
              <Row>
                {/* Services: src/components/Services */}
                <UserTask />
                <UserOrder />
                {/* <Services /> */}
              </Row>

              <Row>
                {/* About: src/components/About */}
                {/* <About /> */}
                <ChangeProfile />
              </Row>
              <Row>
                {/* About: src/components/About */}
                {/* <About /> */}
                <ChangePassword />
              </Row>
            </Col>
          </Row>
        </Container>
        {/* Footer: src/components/Footer */}
        <Footer />
        {/* ScrollUpBtn: src/components/ScrollUpBtn */}
        <ScrollUpBtn />
      </React.Fragment>
    );
  }
}

export default UserView;
