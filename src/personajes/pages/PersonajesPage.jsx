import { Button, PersonajesList} from "../components"
import { useEffect} from "react"
import { useDispatch} from "react-redux"
import { getPersonajes } from "../../slice"

export const PersonajesPage = ()=>{

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch( getPersonajes() );
    },[])
    
    return(

        <>
            <div className="d-grid gap-3">
                <div className="p-2">
                    <PersonajesList/>
                </div>
                <div className="p-2 ">
                    <Button/>
                </div>
            </div>
        </>
        
    )

}