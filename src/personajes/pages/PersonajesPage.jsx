import { Button, PersonajesCards } from "../components"
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPersonajes } from "../slice/personajes"


export const PersonajesPage = ()=>{

    const {personajes=[],page} =useSelector(state=>state.personajes)

    const dispatch=useDispatch()

    useEffect(()=>{

        dispatch( getPersonajes() );    
    },[])


    
    return(

        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {personajes.map(personaje=>(
                    <PersonajesCards
                        key={personaje.id}
                        {...personaje}
                    />
                ))}
            </div>
            <Button page={page} getPersonajes={getPersonajes} dispatch={dispatch}/>
        </>
        
    )
}