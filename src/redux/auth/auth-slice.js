import { createSlice } from '@reduxjs/toolkit';
import { login, register, logout, currentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  error: null,
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    removeError: (state, action) => {
      return { ...state, error: null };
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },

    [register.rejected](state, action) {
      state.error = action.payload;
    },

    [register.pending](state, action) {
      state.error = null;
    },

    [login.pending](state, action) {
      state.error = null;
    },

    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
      state.isLoggedIn = true;
    },

    [login.rejected](state, action) {
      state.error = action.payload;
    },

    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [currentUser.pending](state, action) {
      state.isRefresh = true;
    },

    [currentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefresh = false;
    },

    [currentUser.rejected](state, action) {
      state.isRefresh = false;
    },
  },
});
