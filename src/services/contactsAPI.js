import axios from 'axios';

import { DB_HOST } from '../libs/constants';

axios.defaults.baseURL = DB_HOST;
// axios.defaults.baseURL = DB_HOST;

export const fetchContacts = async () => {
  const data = await axios.get(`/contacts`).then(res => res.data);
  return data;
};

export const addContact = async contact => {
  const data = await axios.post('/contacts', contact).then(({ data }) => data);
  return data;
};

export const deleteContact = async contactId => {
  const data = await axios.delete(`/contacts/${contactId}`);
  return data;
};
