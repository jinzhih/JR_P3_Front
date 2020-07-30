import { post } from './axios';

const API_LOGIN_URL = '/auth';
const API_SIGNUP_URL = "/users";

export const loginUser = (account, password) => {
    console.log(account);
    return post(API_LOGIN_URL, {
        account,
        password,
    }).then(res => res.data);
};

export const signup = data => {
	return post(API_SIGNUP_URL, data).then(res => {
		return res.data;
	});
};