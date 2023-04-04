import { useEffect } from "react"
import { Button, EpisodiosList } from "../componentes"
import { useDispatch, useSelector } from "react-redux"
import { getEpisodios } from "../../slice/episodios/thunks"

export const EpisodiosPage=()=>{

    const dispatch=useDispatch()

    useEffect(()=>{

        dispatch( getEpisodios() );
    },[])

    return(

        <>
            <div className="d-grid gap-3">
                <div className="p-2">
                    <EpisodiosList/>
                </div>
                <div classClass="p-2">
                    <Button/>
                </div>
            </div>
        </>
    )
    
}