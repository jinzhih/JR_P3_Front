import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SearchIcon from '@material-ui/icons/Search';

import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import "../css/searchBar.scss";

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

export default function Order(props) {
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
     
           
                
              <SearchIcon className="searchBarIcon"/>
               
              
                
              <InputBase className="searchBarText"
              placeholder="Search…"
              value = {props.input}
              onChange={props.handleInputChange}
            />
           <Button variant="outlined" onClick={props.handleSearch}>Search Service By Type</Button>
        
      </List>
       
    
    </div>
  );
}
