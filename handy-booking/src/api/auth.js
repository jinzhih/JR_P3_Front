import { post } from './axios';

const API_LOGIN_URL = '/auth';
const API_SIGNUP_URL = "/users";
const API_CLIENT_URL ="/clients";
const API_TRADIE_URL ="/tradies";

export const loginUser = (account, password) => {
    
    return post(API_LOGIN_URL, {
        account,
        password,
    }).then(res => res.data);
};

export const signup = data => {
    console.log(data);
	return post(API_SIGNUP_URL, data).then(res => {
		return res.data;
	});
};

export const signupClient = data => {
    console.log(data);
	return post(API_CLIENT_URL, data).then(res => {
		return res.data;
	});
};
export const signupTradie = data => {
    console.log(data);
	return post(API_TRADIE_URL, data).then(res => {
		return res.data;
	});
};