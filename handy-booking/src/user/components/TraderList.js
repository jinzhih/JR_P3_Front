import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
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
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import "../css/trader.scss";

const useStyles = makeStyles((theme) => ({
  root1: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root: {
    
    marginTop: 20,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0)',
    width: 500,
   // marginLeft: 53
    
    
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

export default function TraderList() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader className="trader__header"
       title="Service List"
       
      />
     
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          TooWrong 4066
        </Typography>
        <Typography variant="body1" component="h2">
          21 Sandford St, St Lucia
        </Typography>
        <div className="trader__content">
          <Avatar aria-label="recipe" className={classes.avatar}>
            J
          </Avatar>
          <Typography variant="body1" component="h2" className="trader__name">
            Dinghui
          </Typography>
        </div>
         
        
      </CardContent>

      <CardContent >
        <div className="trader__items">
<Grid  container spacing={1}>
        <Grid item xs container direction="column" spacing={2} >
              <Grid item xs>
                
                <Typography variant="body1" >
                  OrderID:212 
                </Typography>
                <Typography variant="body1" >
                  Date:07/06/2020 
                </Typography>
                <Typography variant="body1" >
                  Status: finished 
                </Typography>
               
              </Grid>
             
            </Grid>
         
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                
                <Typography variant="body1">
                  StartTime: 8AM 
                </Typography>
                <Typography variant="body1">
                  EndTime: 10AM 
                </Typography>
                <Typography variant="body1">
                  Amount: 100AUD 
                </Typography>
               
              </Grid>
             
            </Grid>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                
                <Typography variant="body1">
                  Phone: 0323339283 
                </Typography>
               
               
              </Grid>
             
            </Grid>
          </Grid>
        </div>
      
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
      <div className={classes.root1}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
      </Collapse>
    </Card>
  );
}
