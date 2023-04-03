import { createSlice } from '@reduxjs/toolkit';

export const episodiosSlice = createSlice({
    name: 'episodios',
    initialState: {
        page: 1,
        episodios: [],
        isLoading: false,
    },
    reducers: {
        startLoadingEpisodios: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setEpisodios: ( state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.episodios = action.payload.episodios;
        }
    }
});

export const { startLoadingEpisodios, setEpisodios } = episodiosSlice.actions;