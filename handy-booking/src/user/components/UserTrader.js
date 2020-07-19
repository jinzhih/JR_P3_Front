import React from 'react';
import "../css/trader.scss";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Trader() {
  const classes = useStyles();
  return (
    <div className="trader">
      <div className="trader__header">
        <h2>
          Trader List
        </h2>
      </div>
      <div className="trader__detail">
        <div className="trader__location">
          <p>Toowong 4066</p>
        </div>
        <div className="trader__company">
          <p>Big X Company</p>
        </div>
        <div className="trader__content">
          <div >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
          <div className="trader__name">
            <p>Ding hui</p>
          </div>
        </div> 
        <div className="trader__description">
          <p>ssssssssssssssssssssssffffffffffssssssssssssssfffffffssss</p>
        </div>
        <div className="trader__comment">
          <div className="comment__count">
            <p>0</p>
          </div>
          <p>comment</p>
        </div>
      </div>
      <div className="trader__detail">
        <div className="trader__location">
          <p>Toowong 4066</p>
        </div>
        <div className="trader__company">
          <p>Big X Company</p>
        </div>
        <div className="trader__content">
          <div className="trader--img">
            <p>img</p>
          </div>
          <div className="trader__name">
            <p>Ding hui</p>
          </div>
        </div> 
        <div className="trader__description">
          <p>ssssssssssssssssssssfffffssssssffffffssssss</p>
        </div>
        <div className="trader__comment">
          <div className="comment__count">
            <p>0</p>
          </div>
          <p>comment</p>
        </div>
      </div>
    </div>
  );
}

export default Trader;
