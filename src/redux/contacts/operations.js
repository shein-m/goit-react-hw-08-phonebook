import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64fb50bfcb9c00518f7ae489.mockapi.io/api/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const contacts = await axios.get(`contacts`);
      return contacts.data;
    } catch (err) {
      return err;
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async data => {
    try {
      const contacts = await axios.post(`contacts`, data);
      return contacts.data;
    } catch (err) {
      return err;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const removeContact = await axios.delete(`/contacts/${id}`);
      return removeContact.data;
    } catch (err) {
      return err;
    }
  }
);
