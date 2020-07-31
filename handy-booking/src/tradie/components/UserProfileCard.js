import React , { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {withRouter} from "react-router";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {removeToken} from '../../utils/auth';
import { fetchTradiesById } from "../../api/tradie";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    marginTop: 20,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0)',
    width: 360,
    marginLeft: 60
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  avatar: {
    backgroundColor: red[500],
  },
}));
const RecipeReviewCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [tradieName, setTradieName] = React.useState("");
  const [tradiePhone, setTradiePhone] = React.useState("");
  const [tradieEmail, setTradieEmail] = React.useState("");
  const [tradieAddress, setTradieAddress] = React.useState("");

  let tradieId;
  
  tradieId = localStorage.getItem("tradieId");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
     
    fetchTradiesById(tradieId).then(tradie => {
      setTradieName(tradie.tradieName);
      
    }
    

    );
  

},[]);

useEffect(() => {
     
  fetchTradiesById(tradieId).then(tradie => {
    setTradiePhone(tradie.tradiePhone);
    
  }
  

  );


},[]);

useEffect(() => {
     
  fetchTradiesById(tradieId).then(tradie => {
    setTradieAddress(tradie.tradieAddress);
    
  }
  

  );


},[]);

useEffect(() => {
     
  fetchTradiesById(tradieId).then(tradie => {
    setTradieEmail(tradie.tradieEmail);
    
  }
  

  );


},[]);



  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            T
          </Avatar>
        }
        action={
          <IconButton aria-label="exit" onClick={() => {
             removeToken();
             props.history.push('/login');
          }}>
            <ExitToAppIcon />
          </IconButton>
        }
        title={tradieName}
        subheader={tradiePhone}
      />
     
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {tradieAddress}
          
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
       
          {tradieEmail}
        </Typography>
      </CardContent>
     
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>About me:</Typography>
          <Typography paragraph>
            About me: 
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default withRouter(RecipeReviewCard);
