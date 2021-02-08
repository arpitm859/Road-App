import jwt_decode from 'jwt-decode';

export const auth = () => {
	const token = localStorage.getItem('token');
	try {
		const date = new Date(0);
		const decoded = jwt_decode(token);
		date.setUTCSeconds(decoded.exp);
		return date.valueOf() > new Date().valueOf();
	} catch (err) {
		return false;
	}
};
