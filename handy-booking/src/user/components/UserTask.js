import React , { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {fetchAllServices} from '../../api/service';
import {fetchServicesByType} from '../../api/service';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import 'date-fns';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import ServiceItem from './ServiceItem';
import SearchIcon from '@material-ui/icons/Search';

import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import "../css/userService.scss";
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
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
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

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Service(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [services, setServices] = React.useState([]);
  const [input, setInput] = React.useState('');
  const [searchTitle, setSearchTitle] = React.useState('SEARCH SERVICE BY TYPE');
  const [isSearch, setisSearch] = React.useState(true);
 

  const handleClick = () => {
    setOpen(!open);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [openBtn, setOpenBtn] = React.useState(false);

  const handleClickOpen = () => {
    setOpenBtn(true);
  };
  const handleClose = () => {
    setOpenBtn(false);
  };

  const [openBtnBook, setOpenBtnBook] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleClickOpenBook = () => {
    setOpenBtnBook(true);
  };
  const handleCloseBook = () => {
    setOpenBtnBook(false);
  };
  const handleSerch = () => {
    if(isSearch){
      
      fetchServicesByType(input).then(service => {
            
            setServices(service);
            setSearchTitle("Clear");
            setisSearch(isSearch === true ? false : true);
          });
         return;
    } 
    fetchAllServices().then(service => {
     
      setServices(service);
      setisSearch(isSearch === true ? false : true);
      setSearchTitle("SEARCH SERVICE BY TYPE");
      setInput("");
    });
    
  }

  const handleInputChange = event =>{
    setInput(event.target.value);
  };


  useEffect(() => {
    if (props.isSearch){
      fetchServicesByType(props.input).then(service => {
      
        setServices(service);
        console.log("search");
      });
  
      return () => {
          console.log("search")
      };
    }
    fetchAllServices().then(service => {
     
      setServices(service);
    });

    return () => {
        console.log("close")
    };
     },[]);
  return (
    <div className={classes.root} >
      <List component="nav" aria-label="title">
     
           
                
     <SearchIcon className="searchBarIcon"/>
      
     
       
     <InputBase className="searchBarText"
     placeholder="Search…"
     value = {input}
     onChange={handleInputChange}
   />
  <Button variant="outlined" onClick={handleSerch}>{searchTitle}</Button>

</List>
      <List component="nav" aria-label="title">
        <ListItem>
        <ListItemText primary="Service List >" />
   
       
        </ListItem>

       
       
      <Divider />
     
  


      {
        services.map((service) => {
          return(
            <ListItem key = {service._id}>

            <ServiceItem
               services = {service}
               isSearch = {props.isSearch}
               
            />
            </ListItem>   
          )
        }

        )
      }
          
      
      
        
        <ListItem>
        <ListItemSecondaryAction>
        <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
          edge="end"
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        </List>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List>
             <Divider />
        <ListItem button onClick={handleClickOpenBook}>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Normal" />
          <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="add">
                      <PostAddIcon />
                    </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      
      <Divider />
      <ListItem button>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="llll" />
          <ListItemSecondaryAction>
                   
          </ListItemSecondaryAction>
        </ListItem>
          </List>
       
      </Collapse>
    

    <div>
    <Dialog onClose={handleCloseBook} aria-labelledby="customized-dialog-title" open={openBtnBook}>
        <DialogTitle id="customized-dialog-title" onClose={handleCloseBook}>
          Book your service
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Service type: {services.type}
          </Typography>
          <Typography gutterBottom>
            Service Room Numbers: 3
          </Typography>
          <Typography gutterBottom>
            Housing Type: apartment
          </Typography>
          <Typography gutterBottom>
            Price: $100
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
      </Grid>
    </MuiPickersUtilsProvider>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseBook} color="primary">
            BOOK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
  }
