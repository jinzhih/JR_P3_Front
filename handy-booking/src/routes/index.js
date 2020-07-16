import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import UserView from '../user/components/UserView';
  // Dashboard
//import Dashboard from "../pages/Dashboard/index";

const authProtectedRoutes = [

    { path: "/dashboard", component: UserView },
    { path: "/users", component: UserView },
    { path: "/tradies", component: UserView },

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/tradies" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },
];

export { authProtectedRoutes, publicRoutes };