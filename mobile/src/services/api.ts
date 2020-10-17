import axios from 'axios';

const api = axios.create({
  baseURL: 'http://189.20.70.38:3333',
});

export default api;
