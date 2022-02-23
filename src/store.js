import { configureStore } from '@reduxjs/toolkit'

import csReducer from './csReducer';

const store = configureStore({
  reducer: {
    csSelected: csReducer,
  },
})

export default store