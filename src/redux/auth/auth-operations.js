import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unsetToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// register
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunlAPI) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      token.setToken(data.token);
      return data;
    } catch (error) {
      return thunlAPI.rejectWithValue(error.response.status);
    }
  }
);

// login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunlAPI) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      token.setToken(data.token);
      return data;
    } catch (error) {
      return thunlAPI.rejectWithValue(error.response.status);
    }
  }
);

// logout
export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('users/logout');
    token.unsetToken();
    return { data };
  } catch (error) {
    console.log(error);
  }
});

// getCurrentUser
export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, thunlAPI) => {
    const state = thunlAPI.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      return thunlAPI.rejectValue();
    }

    token.setToken(persistToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
