import { configureStore } from '@reduxjs/toolkit'

import csReducer from './csReducer';
import userReducer from './userReducer';

const store = configureStore({
  reducer: {
    csSelected: csReducer,
    userOptions:userReducer,
  },
})



export default store