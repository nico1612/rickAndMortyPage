import { useSelector } from "react-redux"
import { EpisodiosCards } from "./EpisodiosCards"

export const EpisodiosList=()=>{

    const {episodios=[]} =useSelector(state=>state.episodios)

    return (

        <div className="row rows-cols-1 row-cols-md-2 g-3">
            {episodios.map( episodio=>( 
                <EpisodiosCards key={episodio.id} {...episodio}/>
            ))}
        </div>
    )
    
}