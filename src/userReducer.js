import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carToModifyStatus:false,
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
      
      // immutable state based off those changes
      state.carToModifyStatus=!state.carToModifyStatus;
      
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