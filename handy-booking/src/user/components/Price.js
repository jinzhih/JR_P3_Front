import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
//import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > span': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}));

export default function Price() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
     
      <AttachMoneyIcon>
      
      </AttachMoneyIcon>
      <TextField id="standard-basic" label="" />
     
    </form>
  );
}