import { createSlice } from '@reduxjs/toolkit';

export const personajesSlice = createSlice({
    name: 'personajes',
    initialState: {
        page: 1,
        personajes: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPersonajes: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPersonajes: ( state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.personajes = action.payload.personajes;
        }
    }
});

export const { startLoadingPersonajes, setPersonajes } = personajesSlice.actions;