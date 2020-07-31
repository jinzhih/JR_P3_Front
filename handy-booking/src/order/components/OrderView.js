import React, { Component} from "react";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../components/NavBar";
import About from "../../components/About";

import OrderDetailView from "./OrderDetail";
import '../css/order.scss';
import {fetchOrderById} from '../../api/order';
import Footer from "../../components/Footer";
import ScrollUpBtn from "../../components/ScrollUpBtn";

import '../../user/css/userBar.scss';
import UserProfileCard from "../../user/components/UserProfileCard";
import Grid from '@material-ui/core/Grid';
import OrderGeneral from './orderGeneral';
import OrderDetailLeft from './OrderDetailLeft';
import OrderDetailRight from './OrderDetailRight';
import Paper from '@material-ui/core/Paper';

class OrderView extends Component {
  constructor(props) {
		super(props);

		this.state = {
      order: {},
      error: null,
      isLoading: false,

			
		};
	}
  
  componentDidMount() {
 
    this.setState({isLoading: true},() =>{
      let OrderId;
      OrderId = localStorage.getItem("orderId");
      fetchOrderById(OrderId).then(order => {
          console.log(OrderId);
          console.log(order);
          this.setState({ order, isLoading: false })
        }).catch(error => {
          this.setState({isLoading:false,error});
        });
    });
  }
		
	
   
  render() {
 
    

    return (
      <React.Fragment>
       
        <NavBar />
        <Container >
        <div className="user-banner" > </div>
          <Row>
           
            <Col>
                  <Row className = "order-view">
                  
    
                  <Grid container spacing={3}>
         
         <Grid item xs={12} sm={8}>
    <h2 >MOVE OUT CLEAN</h2>  
           <OrderGeneral />  
         </Grid>
         <Grid item xs={12} sm={4}>
           <Paper className = "order-view_price">
               <h5 >Price</h5>
               <h1 >$138</h1>
               <a href="#" className="btn btn-primary" className = "order-view_button">Order Status</a>
               <a href="#" className="btn btn-primary" className = "order-view_button">Pending</a>
           </Paper>
         </Grid>
   <Grid item xs={12} sm={6}>
     <h2 >Details</h2> 
     <OrderDetailLeft />
   </Grid>
    <Grid item xs={12} sm={6}>
     <h2 className="order-view_hidden">Details</h2> 
     <OrderDetailRight />
   </Grid>
        
       </Grid>
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
