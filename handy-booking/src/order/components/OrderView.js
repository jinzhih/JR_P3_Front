import React, { Component} from "react";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../components/NavBar";
import About from "../../components/About";

import OrderDetailView from "./OrderDetail";
import '../css/order.scss';




import Footer from "../../components/Footer";
import ScrollUpBtn from "../../components/ScrollUpBtn";

import '../../user/css/userBar.scss';
import UserProfileCard from "../../user/components/UserProfileCard";

class OrderView extends Component {
   
  render() {
 


    return (
      <React.Fragment>
       
        <NavBar />
        <Container >
        <div className="user-banner" > </div>
          <Row>
           
            <Col>
                  <Row className = "order-view">
                    {/* Services: src/components/Services */}
                    <OrderDetailView />  
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

export default OrderView;
