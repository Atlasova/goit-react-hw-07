import { createSlice } from '@reduxjs/toolkit';
import contactsData from '../../ContactsData.json';

const contactsSlice = createSlice({
  name: 'phone',
  initialState: { items: contactsData },
  reducers: {
    addContacts: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContacts: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContacts, deleteContacts } = contactsSlice.actions;
