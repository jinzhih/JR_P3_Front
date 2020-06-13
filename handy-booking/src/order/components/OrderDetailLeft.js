import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function OrderDetailLeft() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem >
        
          <img  className = "order-view_image" alt="Remy Sharp" src="https://img.icons8.com/officexs/40/000000/bedroom.png" />
      
        <ListItemText
          primary="Bedrooms:3"
         
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem >
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="End-of-lease clean: NO"
         
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem >
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Windows: Yes"
          
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem >
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Carpet: NO"
       
        />
      </ListItem>
    </List>
  );
}