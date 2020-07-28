import { get, put, post } from "./axios";
import queryString from "query-string";

const API_SERVICES_URL = "/services";
// const getApiTradiesUrlWithId = id => `${API_SERVICES_URL}/${id}`;

// export const fetchTradiesById = id => {
// 	const url = getApiTradiesUrlWithId(id);
// 	return get(url).then(res => res.data.data);
// };

export const fetchAllServices = () => {
	return get(API_SERVICES_URL).then(res => res.data);

};

// export const fetchTradiesOrderById = id => {
// 	const url = `${getApiTradiesUrlWithId()}/orders`;
// 	return get(url).then(res => res.data.data);
// };

// export const createTradies = tradies => {
// 	return post(API_SERVICES_URL, tradies).then(res => res.data.data);
// };

// export const updateTradiesById = (id, tradies) => {
// 	const url = getApiTradiesUrlWithId(id);
// 	return put(url, tradies);
// };

// export const fetchHisOrders = (id, page = 1, pageSize = 5, status) => {
// 	const stringified = queryString.stringify({
// 		page,
// 		pageSize,
// 		status
// 	});
// 	const url = `${getApiTradiesUrlWithId(id)}/orders/?${stringified}`;

// 	return get(url).then(res => ({
// 		orders: res.data.data.data,
// 		pagination: res.data.data.pagination,
// 		status: res.data.data.search
// 	}));
// };

// export const updateAvatar = (id, file) => {
// 	const url = `${getApiTradiesUrlWithId(id)}/avatar`;
// 	return put(url, file);
// };
