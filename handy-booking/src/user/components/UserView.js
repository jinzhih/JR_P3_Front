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
import ErrorMessage from "../../UI/Error";
import Trader from "./TraderList";
import SearchBar from "./SearchBar";
import "../css/userView.scss";
import {fetchServicesByType} from '../../api/service';
import {
	SERVICE_URL
} from "../../routes/URLMap";

class UserView extends Component {
  constructor(props) {
    super(props);

    this.state = {
        services: [],
        error: null,
        isLoading: false,
        pagination: {},
        limit: 8,
        input: "",
        isSearch: false,
        isOrderListShow: false,
        isServiceListShow: true,
    };
} 


handleChangeLimit = limit => {
  this.setState({limit});
}
handleInputChange = event =>{
	const value = event.target.value;
	this.setState({ input : value });
};

handleSearch = () =>{
  fetchServicesByType(this.state.input).then(this.updateService);
  this.setState({isSearch: true});
}

handleOrderShow = () =>{
  
  this.setState({isOrderListShow: true});
  this.setState({isServiceListShow: false});
}

handleOrderHidden = () =>{

  this.setState({isOrderListShow: false});
  this.setState({isServiceListShow: true});
}

updateService = (data) =>{
	const services = data;
		
		this.setState({ services })
}; 
componentDidMount() {
  // fetchAllServices().then(services => {
  //   console.log(services);
  //   this.setState({ services })
  // });
  this.setState({isLoading: true},() =>{
    fetchAllServices().then(services => {
        console.log(services);
        this.setState({ services, isLoading: false })
      }).catch(error => {
        this.setState({isLoading:false,error});
      });
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
                <UserManageBar 
                isOrderListShow = {this.state.isOrderListShow}
                handleOrderShow = {this.handleOrderShow}
                handleOrderHidden = {this.handleOrderHidden}
                
                />
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
               
              </Row>
              <Row>
              { this.state.isServiceListShow ?<UserTask 
                services = {this.state.services} 
                isSearch = {this.state.isSearch}
                input = {this.state.input}
                input = {this.state.input}
                handleInputChange = {this.handleInputChange}
                 handleSearch = {this.handleSearch}
                />  : null }
            
                  
                { this.state.isOrderListShow ?<UserOrder  /> : null }
               
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
