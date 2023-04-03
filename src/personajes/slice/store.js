import { configureStore } from "@reduxjs/toolkit";
import { personajesSlice } from "./personajes";

export const store = configureStore({
    reducer: {
        personajes:personajesSlice.reducer,
  
    },
})