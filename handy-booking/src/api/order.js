import { get, put, post} from "./axios";
import queryString from "query-string";

const API_ORDERS_URL = "/orders";
const getApiOrderUrlWithId = id => `${API_ORDERS_URL}/${id}`;

export const fetchOrderById = id => {
	const url = `${API_ORDERS_URL}/${id}`;
	return get(url).then(res => res.data);
};

export const fetchAllNewOrders = (page = 1, pageSize = 5) => {
	const stringified = queryString.stringify({
		page,
		pageSize
	});
	return get(`${API_ORDERS_URL}/?${stringified}`).then(res => ({
		orders: res.data.data.data,
		pagination: res.data.data.pagination
	}));
};

export const createOrder = (serviceId, clientId, order) => {
	const url = `${API_ORDERS_URL}?serviceId=${serviceId}&clientId=${clientId}`;
	return post(url, order).then(res => res.data);
};

export const updateOrderById = (id, order) => {
	const url = getApiOrderUrlWithId(id);
	return put(url, order);
};


