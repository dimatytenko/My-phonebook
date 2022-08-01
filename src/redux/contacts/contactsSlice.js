import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items = [...state.items, payload];
      state.isLoading = false;
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = state.items.filter(contact => contact._id !== payload);
      state.isLoading = false;
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { filter } = contactsSlice.actions;
export const contacts = contactsSlice.reducer;
