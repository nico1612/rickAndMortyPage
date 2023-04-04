import { setEpisodios, startLoadingEpisodios } from "./episodiosSlice";


export const getEpisodios = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingEpisodios() );

        // TODO: realizar petición http
         const resp = await fetch(`https://rickandmortyapi.com/api/episode/?page=${page}`);
         const data = await resp.json();
        //const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        //console.log(data.results)
        dispatch( setEpisodios({ episodios: data.results, page: page  }) );
    }

}