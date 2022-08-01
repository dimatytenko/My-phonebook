import axios from 'axios';

axios.defaults.baseURL = 'https://my-phonebooks-api.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:8888/api';

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
