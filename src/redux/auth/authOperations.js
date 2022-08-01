import { createAsyncThunk } from '@reduxjs/toolkit';
import * as connectionsAPI from '../../services/connectionsAPI';

const token = connectionsAPI.token;

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const data = await connectionsAPI.fetchRegister(credentials);
    console.log(data);
    return data.ResponseBody;
  } catch (error) {
    return error.rejectWithValue();
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await connectionsAPI.fetchLogIn(credentials);
    console.log(data);

    token.set(data.ResponseBody.token);
    return data.ResponseBody;
  } catch (error) {
    return error.rejectWithValue();
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await connectionsAPI.fetchLogOut;
    token.unset();
  } catch (error) {}
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const data = await connectionsAPI.fetchUsers();
      return data.ResponseBody;
    } catch (error) {
      return error.rejectWithValue();
    }
  },
);
