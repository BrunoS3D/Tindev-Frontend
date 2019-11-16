import axios from 'axios';

const api = axios.create({
	baseURL: 'https://mib-tindev-backend.herokuapp.com'
});

export default api;

