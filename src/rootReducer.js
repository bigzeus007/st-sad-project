import { combineReducers } from 'redux'
import csReducer from './csReducer';
import userReducer from './userReducer';

// import todosReducer from './features/todos/todosSlice'
// import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  csSelected: csReducer,
  userSelected: userReducer
})

export default rootReducer