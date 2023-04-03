import { Button} from "../components"
import { useEffect} from "react"
import { useDispatch} from "react-redux"
import { PersonajesList } from "../components/PersonajesList"
import { getPersonajes } from "../../slice/personajes"


export const PersonajesPage = ()=>{

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch( getPersonajes() );
    },[])
    
    return(

        <>
            <PersonajesList/>
            <Button />
        </>
        
    )
}