import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.fetchContacts();
      return data.ResponseBody.contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    const newContact = await contactsAPI.addContact(contact);
    return newContact.ResponseBody.contact;
  },
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await contactsAPI.deleteContact(contactId);
    return contactId;
  },
);
