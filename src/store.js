import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersReducer'
import postsReducer from './carsReducer'

const store = configureStore({
  reducer: {
    users: usersReducer,
    cars: carsReducer,
  },
})

export default store