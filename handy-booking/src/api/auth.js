import { post } from './axios';


const API_LOGIN_URL = '/auth';

export const loginUser = (username, password) => {
    return post(API_LOGIN_URL, {
        username,
        password,
    }).then(res => res.data.data.token);
};
