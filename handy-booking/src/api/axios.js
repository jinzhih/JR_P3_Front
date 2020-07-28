import axios from "axios";
import { getToken } from "../utils/auth";

axios.defaults.baseURL = "http://localhost:3000/api";

const appendAuthToken = config => {
    const jwtToken = getToken();
    const Authorization = jwtToken && `Bearer ${jwtToken}`;

    return { ...config, headers: { Authorization, ...config.header } };
};

export const get = (url, config = {}) =>
    axios.get(url, appendAuthToken(config));

export const post = (url, data, config = {}) => {

	return axios.post(url, data, appendAuthToken(config));

};
	



export const put = (url, data, config = {}) =>
    axios.put(url, data, appendAuthToken(config));

export const del = (url, config = {}) =>
    axios.delete(url, appendAuthToken(config));

