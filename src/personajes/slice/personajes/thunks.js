import { setPersonajes, startLoadingPersonajes } from "./personajesSlice";


export const getPersonajes = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPersonajes() );

        // TODO: realizar petición http
         const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
         const data = await resp.json();
        //const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        //console.log(data.results)
        dispatch( setPersonajes({ personajes: data.results, page: page  }) );
    }

}