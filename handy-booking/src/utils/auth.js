import jwt from "jsonwebtoken";

const JWT_TOKEN_NAME = "jr-handy";
const CLIENT_ID = "clientId";
const TRADIE_ID = "tradieId";

export const getToken = () => localStorage.getItem(JWT_TOKEN_NAME);
export const getClientId = () => localStorage.getItem(CLIENT_ID);
export const getBusinessId = () => localStorage.getItem(TRADIE_ID);

export const setToken = token => localStorage.setItem(JWT_TOKEN_NAME, token);

export const setClientId = clientId =>
	localStorage.setItem(CLIENT_ID, clientId);

export const setTradieId = tradieId =>
	localStorage.setItem(TRADIE_ID, tradieId);

export const removeToken = () => localStorage.removeItem(JWT_TOKEN_NAME);
export const removeClientId = () => localStorage.removeItem(CLIENT_ID);
export const removeBusinessId = () => localStorage.removeItem(TRADIE_ID);

export const getTokenRole = () => {
	const token = localStorage.getItem(JWT_TOKEN_NAME);
	const decodedToken = jwt.decode(token);
	return decodedToken.role;
};

export const isLoggedIn = () => {
	const token = localStorage.getItem(JWT_TOKEN_NAME);

	if (!token) return false;

	const decodedToken = jwt.decode(token);
	const expirationTime = decodedToken.exp * 1000;
	const isExpired = Date.now() - expirationTime > 0;
	return !isExpired;
};
