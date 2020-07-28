import React, { Component} from "react";
//import {Route, Switch, Redirect} from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../components/NavBar";
import {fetchAllServices} from '../../api/service';

import Footer from "../../components/Footer";
import ScrollUpBtn from "../../components/ScrollUpBtn";
import UserTask from "./UserTask";
import UserOrder from "./UserOrder";
import UserManageBar from "./UserManageBar";
import "../css/userBar.scss";
import UserProfileCard from "./UserProfileCard";
import UserProfileCard2 from "./UserProfileCard2";
import ChangePassword from "./ChangePassword";
import ChangeProfile from "./ChangeProfile";
import Trader from "./TraderList";
import SearchBar from "./SearchBar";
import "../css/userView.scss";

class UserView extends Component {
  constructor(props) {
    super(props);

    this.state = {
        services: [],
        error: null,
        isLoading: false,
        pagination: {},
    };
} 
 
componentDidMount() {
  fetchAllServices().then(services => {
    this.setState({ services })
  });
}

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container>
          <div className="user-banner"> </div>
          <Row>
            <Col className="user__profile">
              <Row className="user__profile">
                <UserProfileCard />
                <UserManageBar />
              </Row>
              <Row className="user__profile">
              
              </Row>
              <Row className="user__profile">
             
              </Row>
            </Col>
            <Col>
              <Row >
                {/* Services: src/components/Services */}
                <div className="user__profile2">
                    <UserProfileCard2 />
                </div>
               
              
                {/* <Services /> */}
              </Row>
              <Row>
                {/* Services: src/components/Services */}
                <SearchBar />
                <UserTask />
                <UserOrder />
              
                
                {/* <Services /> */}
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
