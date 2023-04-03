import { Button, PersonajesCards } from "../components"
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPersonajes } from "../slice/personajes"
import { PersonajesList } from "../components/PersonajesList"


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