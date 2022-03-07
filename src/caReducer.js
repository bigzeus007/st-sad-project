import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  express: "",
  mecanique: "",
  electrique: "",
  bodyCar: "",
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
        
        case "electrique":
          return state = { ...state, electrique: nom }
        
        case "bodyCar":
          return state = { ...state, bodyCar: nom }
        

        default: 
        return state
      }
     
      // state.push({nom:nom,atelier:atelier})
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
});

// Action creators are generated for each case reducer function
export const { selectTech } = caSlice.actions;

export default caSlice.reducer;
