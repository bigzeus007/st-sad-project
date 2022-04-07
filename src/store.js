import { configureStore } from "@reduxjs/toolkit";

import csReducer from "./csReducer";
import userReducer from "./userReducer";
import caReducer from "./caReducer";

const store = configureStore({
  reducer: {
    csSelected: csReducer,
    userOptions: userReducer,
    selectedByCa: caReducer,
  },
});

export default store;
