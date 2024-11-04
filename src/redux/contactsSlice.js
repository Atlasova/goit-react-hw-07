import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './contactsOps';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContacts.pending,
          addContacts.pending
        ),
        state => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContacts.rejected,
          addContacts.rejected
        ),
        state => {
          state.loading = false;
          state.error = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContacts.fulfilled,
          addContacts.fulfilled
        ),
        state => {
          state.loading = false;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
