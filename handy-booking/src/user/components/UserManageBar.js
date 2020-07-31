import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginLeft: 60
  },
}));

export default function UserManageBar(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <AccountBoxIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Profile"  />
      </ListItem >
      <Divider variant="inset" component="li" />
      <ListItem button> 
        <ListItemAvatar>
          <Avatar>
            <LockIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Password"  />
      </ListItem>
      <Divider variant="inset" component="li" />
  
      <ListItem button onClick={props.handleOrderShow}>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Order List" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button onClick={props.handleOrderHidden}>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Service List"  />
       
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem button >
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Other"  />
      </ListItem>
    </List>
  );
}
