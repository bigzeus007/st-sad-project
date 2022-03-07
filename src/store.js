
// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './rootReducer'

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// const store = createStore(rootReducer, composedEnhancer)
// export default store












import { configureStore } from '@reduxjs/toolkit'

import csReducer from './csReducer';
import userReducer from './userReducer';
import caReducer from './caReducer';

const store = configureStore({
  reducer: {
    csSelected: csReducer,
    userOptions:userReducer,
    selectedByCa:caReducer,
  },
})



export default store