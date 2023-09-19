import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get(`contacts`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async userData => {
    try {
      const { data } = await axios.post(`contacts`, userData);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ name, number, id }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
