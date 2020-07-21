import React from 'react';
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
import DeleteIcon from '@material-ui/icons/Delete';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    //marginLeft: 50,
    marginTop: 20,
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

export default function Order() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="title">
        <ListItem>
        <ListItemText primary="My Order >" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Status: Accept" />
          <ListItemSecondaryAction>
          <ButtonGroup size="small" aria-label="small outlined button group">
             <Button>Accept</Button>
             <Button>Finish</Button>
             <Button>Cancel</Button>
          </ButtonGroup>
          </ListItemSecondaryAction>
        </ListItem>
      
      <Divider />
      <ListItem button>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Status: Finish" />
          <ListItemSecondaryAction>
            <ButtonGroup size="small" aria-label="small outlined button group">
             <Button>Accept</Button>
             <Button>Finish</Button>
             <Button>Cancel</Button>
            </ButtonGroup>
          </ListItemSecondaryAction>
        </ListItem>
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
          <ListItem button>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Status: Accept" />
          <ListItemSecondaryAction>
          <ButtonGroup size="small" aria-label="small outlined button group">
             <Button>Accept</Button>
             <Button>Finish</Button>
             <Button>Cancel</Button>
          </ButtonGroup>
          </ListItemSecondaryAction>
        </ListItem>
      
      <Divider />
      <ListItem button>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Status: Finish" />
          <ListItemSecondaryAction>
            <ButtonGroup size="small" aria-label="small outlined button group">
             <Button>Accept</Button>
             <Button>Finish</Button>
             <Button>Cancel</Button>
            </ButtonGroup>
          </ListItemSecondaryAction>
        </ListItem>
          </List>
       
      </Collapse>
    </div>
  );
}
