import React , { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {withRouter} from "react-router";
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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {removeToken} from '../../utils/auth';
import { fetchClientById } from "../../api/client";
import useReactRouter from 'use-react-router';


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
  
  const [clientName, setClientName] = React.useState("");
  const [clientPhone, setClientPhone] = React.useState("");
  const [clientEmail, setClientEmail] = React.useState("");

  let clientId;
  
  clientId = localStorage.getItem("clientId");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
     
    fetchClientById(clientId).then(client => {
      setClientName(client.clientName);
      
    }
    

    );
  

},[]);


useEffect(() => {
     
  fetchClientById(clientId).then(client => {
    setClientEmail(client.clientEmail);
    
  }
  

  );


},[]);

useEffect(() => {
  
 fetchClientById(clientId).then(client => {
  setClientPhone(client.clientPhone);
   
 }
 

 );


},[]);



  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            J
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
        title={clientName}
        subheader={clientPhone}
      />
     
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {clientEmail}
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