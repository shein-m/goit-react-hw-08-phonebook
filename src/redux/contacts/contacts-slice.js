import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contacts-operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    // fetch data
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },

    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // add
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
    },

    // delete
    [deleteContact.pending]: (state, action) => {
      state.isLoading = true;
    },

    [deleteContact.fulfilled]: (state, action) => {
      const newItems = state.items.filter(el => el.id !== action.payload.id);
      return { ...state, items: newItems, isLoading: false };
    },

    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // updateContacts

    [updateContact.fulfilled]: (state, action) => {
      state.items = state.items.map(el => {
        if (el.id === action.payload.id) {
          return action.payload;
        }
        return el;
      });
    },
  },
});
