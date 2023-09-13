import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filter';
import { contactsSlice } from './contacts/contacts';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
