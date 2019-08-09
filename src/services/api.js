import axios from 'axios';

// const host = 'http://localhost:3333'
const host = 'https://mib-tindev-backend.herokuapp.com'

const api = axios.create({
	baseURL: host,
});

export default api;

