

const initialCar = {
  ;



  const carsSlice = createSlice({
    name: 'carSelected',
    initialCar,
    reducers: {
      carChange(state, action) {
        const {carModification} = action.payload
        state={...state,carModification}
      },
      // todoToggled(state, action) {
      //   const todoId = action.payload
      //   const todo = state.entities[todoId]
      //   todo.completed = !todo.completed
      // }
    }
  })
  
  export const { carChange } = carsSlice.actions
  
  export default carsSlice.reducer

// function carsReducer(state = noCar, action) {
//     switch (action.type) {
//       case 'ADD_NEW_CAR': {


//         //getContent from firebase
//         return {} //MainCar void
//       }
//       case 'GET_CARS': {
//         const { index } = action.payload
//         return state.map((todo, i) => {
//           if (i !== index) return todo
  
//           return {
//             ...todo,
//             completed: !todo.completed,
//           }
//         })
//       }
//       case 'REMOVE_TODO': {
//         return state.filter((todo, i) => i !== action.payload.index)
//       }
//       default:
//         return state
//     }
//   }