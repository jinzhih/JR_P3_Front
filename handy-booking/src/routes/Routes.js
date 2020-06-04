import React, {Fragment} from 'react';
import {
    Redirect,
    Route,
    Switch
  } from "react-router-dom"; 

import UserView from '../user/components/UserView';
import TradieView from '../tradie/components/TradieView';
import OrderView from '../order/components/OrderView';
import HomeView from '../home/components/HomeView';
import UserSignupView from '../signup/components/UserSignupView';
import TradieSignupView from '../signup/components/TradieSignupView';

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/users" component={UserView} />
            <Route exact path="/tradies" component={TradieView} />
            <Route exact path="/orders" component={OrderView} /> 
            <Route exact path="/home" component={HomeView} />
            <Route exact path="/signup/user" component={UserSignupView} />
            <Route exact path="/signup/tradie" component={TradieSignupView} />
           

        </Switch>
    )
};

export default Routes;
