import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts';
import { authReducer } from './auth';

console.log(authReducer);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,

    auth: authReducer,
  },

  devTools: process.env.NODE_ENV === 'development',
});

export default store;
