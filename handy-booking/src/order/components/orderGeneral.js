import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import RoomIcon from '@material-ui/icons/Room';
import EventNoteIcon from '@material-ui/icons/EventNote';
import '../css/order.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function OrderGeneral() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <PermIdentityIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="POSTED BY" secondary="JESSIE HOU" />
      </ListItem >
      <Divider variant="inset" component="li" />
      <ListItem > 
        <ListItemAvatar>
          <Avatar>
            <RoomIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="LOCATION" secondary="2000" />
             <ListItemSecondaryAction>
                <Button className="order-view_plaintBtn">VIEW LOCATION</Button>
            </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
  
      <ListItem >
        <ListItemAvatar>
          <Avatar>
            <EventNoteIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="DUE DATE" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem >
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="TAKEN BY"  secondary="ABC Pty"/>
        <ListItemSecondaryAction>
                <Button className="order-view_plaintBtn">VIEW BUSINESS</Button>
            </ListItemSecondaryAction>  
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem >
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="Jan 9, 2014" />
      </ListItem>
    </List>
  );
}