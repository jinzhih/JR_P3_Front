import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OrderGeneral from './orderGeneral';
import OrderDetailLeft from './OrderDetailLeft';
import OrderDetailRight from './OrderDetailRight';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));



  export default function OrderDetailView(props) {
    const classes = useStyles();
    
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
         
          <Grid item xs={12} sm={8}>
    <h2 >ppp</h2>  
            <OrderGeneral />  
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper} className = "order-view_price">
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
      </div>
    );
  }