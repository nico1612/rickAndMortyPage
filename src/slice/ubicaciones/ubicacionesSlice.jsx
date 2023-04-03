import { createSlice } from '@reduxjs/toolkit';

export const ubicacionesSlice = createSlice({
    name: 'ubicaciones',
    initialState: {
        pages: 1,
        ubicaciones: [],
        isLoading: false,
    },
    reducers: {
        startLoadingUbicaciones: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setUbicaciones: ( state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.ubicaciones = action.payload.ubicaciones;
        }
    }
});

export const { startLoadingUbicaciones, setUbicaciones } = ubicacionesSlice.actions;