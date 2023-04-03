import { useEffect } from "react"
import { Button, EpisodiosList } from "../componentes"
import { useDispatch, useSelector } from "react-redux"
import { getEpisodios } from "../../slice/episodios/thunks"

export const EpisodiosPage=()=>{
    
    const dispatch=useDispatch()
    const {page} =useSelector(state=>state.episodios)

    useEffect(()=>{

        dispatch( getEpisodios(page) );    
    },[])

    return(
        <>
            <EpisodiosList/>
            <Button/>
        </>
    )
}