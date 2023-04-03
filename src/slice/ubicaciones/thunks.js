import { setUbicaciones, startLoadingUbicaciones } from "./ubicacionesSlice";


export const getUbicaciones = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingUbicaciones() );

        // TODO: realizar petición http
         const resp = await fetch(`https://rickandmortyapi.com/api/location/?page=${page}`);
         const data = await resp.json();
        //const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        //console.log(data.results)
        dispatch( setUbicaciones({ ubicaciones: data.results, page: page  }) );
    }

}