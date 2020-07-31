import React , { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useReactRouter from 'use-react-router';
import {createOrder} from '../../api/order';
import {fetchTradiesById} from '../../api/tradie';


import Grid from '@material-ui/core/Grid';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
 
const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 500,
      backgroundColor: theme.palette.background.paper,
      //marginLeft: 50,
      marginTop: 20,
      
  
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    
    
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));



export default function ServiceItem(props) {
    const { history, location, match } = useReactRouter();
  
    let clientId;
  
    clientId = localStorage.getItem("clientId");
 
    const classes = useStyles();

 
  const [openBtnBook, setOpenBtnBook] = React.useState(false);
  const [tradie, setTradie] = React.useState({});
 
  
  const handleClickOpenBook = () => {
    setOpenBtnBook(true);
  };
  const handleCloseBook = () => {
    setOpenBtnBook(false);
  };
 
  useEffect(() => {

    fetchTradiesById(props.orders.tradie).then(tradie => {
     
        setTradie(tradie);
    });

    console.log(tradie);

    return () => {
        console.log("close")
    };
     },[]);

return (
   
    <List component="nav" className={classes.root} aria-label="mailbox folders">
     
     
      <ListItem button divider onClick={handleClickOpenBook}>
          <ListItemIcon>
             <ListAltIcon />
           </ListItemIcon>
        <ListItemText primary={props.orders.status} />
      </ListItem>
     
      <Divider light />
      

    
      <Dialog onClose={handleCloseBook} aria-labelledby="customized-dialog-title" open={openBtnBook}>
        <DialogTitle id="customized-dialog-title" onClose={handleCloseBook}>
          Order Detail
        </DialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom>
            Service Address: {props.orders.serviceAddress}
          </Typography>
          <Typography gutterBottom>
            Service Time: {props.orders.requireServiceTime}
          </Typography>
        <Typography gutterBottom>
            Tradie Name: {props.orders.tradie.tradieName}
          </Typography>
        <Typography gutterBottom>
            Tradie Phone: {props.orders.tradie.tradiePhone}
          </Typography>
          <Typography gutterBottom>
          Tradie Email: {props.orders.tradie.tradieEmail}
          </Typography>

      
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus  color="primary" onClick={handleCloseBook}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </List>
    
    
  );
}

 
  