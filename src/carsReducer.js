

const noCar = {
  customerName: 'no-car',
  customerCategory: "Normal",
  createdAt: "",
  rdvFixed: false,
  serviceAdvisor: null,
  rdvTimeFixed: null,
  whereIsTheCar: "Parking-E",
  affected: null,
  isItInGoodPlace: true,
  basyCar: false,
  myService: false,
  electrical: false,
  body: false,
  mecanical: false,
  pneus: false,
  plaquettes: false,
  batterie: false,
  lavage: false,

  };



  const carsSlice = createSlice({
    name: 'carSelected',
    initialState,
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