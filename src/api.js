import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8081',
});

//register user
export const registerUser = (data) => API.post('/register', data);

//login user
export const loginUser = (data) => API.post('/login', data);

export default API;
