import { post } from './axios';

const API_LOGIN_URL = '/auth';

export const loginUser = (account, password) => {
    console.log(account);
    return post(API_LOGIN_URL, {
        account,
        password,
    }).then(res => res.data);
};

