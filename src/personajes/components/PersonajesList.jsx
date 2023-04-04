import { useSelector } from "react-redux"
import { PersonajesCards } from "./PersonajesCards"


export const PersonajesList=()=>{

    const {personajes=[]} =useSelector(state=>state.personajes)

    return(

        <div className="row rows-cols-1 row-cols-md-2 g-2">
            {personajes.map(personaje=>(
                <PersonajesCards
                    key={personaje.id}
                    {...personaje}
                />
            ))}
        </div>
        
    )
}