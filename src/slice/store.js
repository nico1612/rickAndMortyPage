import { configureStore } from "@reduxjs/toolkit";
import { personajesSlice } from "./personajes";
import { ubicacionesSlice } from "./ubicaciones";
import { episodiosSlice } from "./episodios";

export const store = configureStore({
    reducer: {
        ubicaciones:ubicacionesSlice.reducer,
        personajes:personajesSlice.reducer,
        episodios:episodiosSlice.reducer
    },
})