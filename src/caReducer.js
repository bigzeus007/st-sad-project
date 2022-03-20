import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerSetName:"",
  express: "",
  mecanique: "",
  diagnostic: "",
  carrosserie: "",
};

const caSlice = createSlice({
  name: "selectedByCa",
  initialState,
  reducers: {
    selectTech: (state, action) => {
      const [atelier,nom]=action.payload
        switch (atelier) {
        case "express":
          return state = { ...state, express: nom }
        
        case "mecanique":
          return state = { 
            ...state,
            mecanique: nom 
          }
        
        case "diagnostic":
          return state = { ...state, diagnostic: nom }
        
        case "carrosserie":
          return state = { ...state, carrosserie: nom }
        

        default: 
        return state
      }
     
      // state.push({nom:nom,atelier:atelier})
    },

    resetState: (state, action) => {

        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        return initialState
      },
    //   rdvStatus: (state, action) => {
    //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //     // doesn't actually mutate the state because it uses the Immer library,
    //     // which detects changes to a "draft state" and produces a brand new
    //     // immutable state based off those changes
    //     state.rdvFixed = action.payload
    //   },
      customerName: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.customerSetName = action.payload
      },
  },
});

// Action creators are generated for each case reducer function
export const { selectTech,resetState,customerName } = caSlice.actions;

export default caSlice.reducer;
