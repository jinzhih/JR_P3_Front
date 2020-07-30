import React from 'react';
import {
    //BrowserRouter,
    Redirect,
    Route,
    Switch
  } from "react-router-dom"; 
import HomeThree from '../pages/HomeThree';
import UserView from '../user/components/UserView';
import TradieView from '../tradie/components/TradieView';
import OrderView from '../order/components/OrderView';
//import HomeView from '../home/components/HomeView';
import UserSignupView from '../signup/components/UserSignupView';
import TradieSignupView from '../signup/components/TradieSignupView';
import ClientSignupView from '../signup/components/ClientSignupView';
import NewOrder from '../order/components/NewOrder';
import NewBook from '../order/components/NewBook';
import Login from "../pages/Authentication/Login";
import ProtectedRoute from './componets/ProtectedRoute';
import {
	CLIENT_BASE_URL,
	TRADIE_BASE_URL,
	LOGIN_URL,
	SIGNUP_URL,
	HOMEPAGE_URL,
	SERVICE_URL,
	ORDER_BASE_URL
} from "./URLMap";


const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to={HOMEPAGE_URL} />
            <ProtectedRoute exact path={`${CLIENT_BASE_URL}/:clientId`} component={UserView} />
            <ProtectedRoute exact path={`${TRADIE_BASE_URL}/:tradieId`} component={TradieView} />
            <Route exact path={LOGIN_URL} component={Login} />
           
            <Route exact path={HOMEPAGE_URL} component={HomeThree} />
            <Route exact path={SIGNUP_URL} component={UserSignupView} />
            <Route exact path="users/tradie/signup/" component={TradieSignupView} />
            <Route exact path="/users/client/signup/" component={ClientSignupView} />
            <Route exact path="/neworders" component={NewOrder} />
            <Route exact path="/newbooks" component={NewBook} />
            <Route exact path="/orders/:orderId" component={OrderView} />
           

        </Switch>
    )
};

export default Routes;
