import axios from 'axios';

import { DB_HOST } from '../libs/constants';

axios.defaults.baseURL = DB_HOST;
// axios.defaults.baseURL = DB_HOST;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function fetchRegister(credentials) {
  const data = await axios
    .post('/users/signup', credentials)
    .then(res => res.data);
  return data;
}

export async function fetchLogIn(credentials) {
  const data = await axios
    .post('/users/login', credentials)
    .then(res => res.data);
  return data;
}

export async function fetchLogOut() {
  const data = await axios.post('/users/logout').then(res => res.data);
  return data;
}

export async function fetchUsers() {
  const data = await axios.get('/users/current').then(res => res.data);
  return data;
}
