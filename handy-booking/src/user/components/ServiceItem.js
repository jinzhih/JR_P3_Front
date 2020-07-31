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
import { 
setOrderId
} from '../../utils/auth';


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
    let serviceId;
    serviceId = props.services._id;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [isBookSuccess, setIsBookSuccess] = React.useState(false);
  const [openBtnBook, setOpenBtnBook] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const selectedDateRef = useRef(null);
  const orderRef = useRef({});
  const [address, setAddress] = React.useState('18 Mare');
  const addressRef = useRef(null);
  const isBookSuccessRef = useRef(null);
const [order, setOrder] = React.useState({
    requireServiceTime: "",
    serviceAddress: "",
    
 })

 useEffect(() => {
    selectedDateRef.current = selectedDate;
    
     },[selectedDate]);

useEffect(() => {
    setOrder({
        requireServiceTime: selectedDateRef.current.toString(),
    serviceAddress: address,
  }
    );
    console.log(selectedDateRef.current)
   

},[]);
useEffect(() => {
    
    addressRef.current = address;
    

},[address]);

useEffect(() => {
    
  isBookSuccessRef.current = isBookSuccess;
  

},[isBookSuccess]);


  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
   const handleDateChange = (date) => {
     setSelectedDate(date);
   
 
  };
  


  const handleClickOpenBook = () => {
    setOpenBtnBook(true);
  };
  const handleCloseBook = () => {
    setOpenBtnBook(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleBookOrder = () => {
   
    createOrder(serviceId,clientId,{requireServiceTime: selectedDateRef.current.toString(),
        serviceAddress: addressRef.current,}).then( (order) => {
          setOrderId(order._id);
           history.push(`/orders/${order._id}`);
        });
     
  };

return (
   
    <List component="nav" className={classes.root} aria-label="mailbox folders">
     
     
      <ListItem button divider onClick={handleClickOpenBook}>
          <ListItemIcon>
             <ListAltIcon />
           </ListItemIcon>
        <ListItemText primary={props.services.type} />
      </ListItem>
     
      <Divider light />
      

    
      <Dialog onClose={handleCloseBook} aria-labelledby="customized-dialog-title" open={openBtnBook}>
        <DialogTitle id="customized-dialog-title" onClose={handleCloseBook}>
          Book your service
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Service type: {props.services.type}
          </Typography>
          <Typography gutterBottom>
            Service Room Numbers: {props.services.numberOfServiceRoom}
          </Typography>
          <Typography gutterBottom>
            Housing Type: {props.services.housingType}
          </Typography>
          <Typography gutterBottom>
            Price: {props.services.servicePrice}
          </Typography>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
       
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Address"
          multiline
          rowsMax={4}
          value={address}
          onChange={handleAddressChange}
        />

      </Grid>
    </MuiPickersUtilsProvider>
          
        </DialogContent>
        <DialogActions>
        <Button autoFocus onClick={handleCloseBook} color="primary">
            CANCLE
          </Button>
       
          <Button autoFocus onClick={handleBookOrder} color="primary">
            BOOK
          </Button>
        
        </DialogActions>
      </Dialog>
    </List>
    
    
  );
}

 
  