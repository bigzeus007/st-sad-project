import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  customerName: null,
  customerCategory: "Normal",
  createdAt: null,
  rdvFixed: null,
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
  
  


}

const userSlice = createSlice({
  name: 'userOptions',
  initialState,
  reducers: {
    carModification: (state, action) => {
      // const {}
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      const {carToModify}=action.payload
      // immutable state based off those changes
      state = {...carToModify}
      
    },

    // rdvTimeSelected: (state, action) => {
    //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //     // doesn't actually mutate the state because it uses the Immer library,
    //     // which detects changes to a "draft state" and produces a brand new
    //     // immutable state based off those changes
    //     state.rdvTime = action.payload
    //   },
    //   rdvStatus: (state, action) => {
    //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //     // doesn't actually mutate the state because it uses the Immer library,
    //     // which detects changes to a "draft state" and produces a brand new
    //     // immutable state based off those changes
    //     state.rdvFixed = action.payload
    //   },
    //   customerName: (state, action) => {
    //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //     // doesn't actually mutate the state because it uses the Immer library,
    //     // which detects changes to a "draft state" and produces a brand new
    //     // immutable state based off those changes
    //     state.customerSetName = action.payload
    //   },
    
    
  },
})

// Action creators are generated for each case reducer function
export const { carModification} = userSlice.actions

export default userSlice.reducer