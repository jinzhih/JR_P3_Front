import { post } from './axios';

const API_LOGIN_URL = '/auth';

export const loginUser = (account, password) => {
    return post(API_LOGIN_URL, {
        account,
        password,
    }).then(res => {
        console.log(res)});
       
};

