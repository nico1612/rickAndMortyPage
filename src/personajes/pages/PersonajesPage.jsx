import { PersonajesCards } from "../components"
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPersonajes } from "../slice/personajes"


export const PersonajesPage = ()=>{

    const {personajes=[],page} =useSelector(state=>state.personajes)

    const dispatch=useDispatch()

    useEffect(()=>{

        dispatch( getPersonajes() );    
    },[])


    const onPrevios=()=>{
        if(page===1)return;

        dispatch( getPersonajes(page-1) )
    }
    
    const onNext=()=>{
        if(page===42)return;
        
        dispatch( getPersonajes(page+1) )
        
    }
    
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

            <div className="container-fluid h-100"> 
                <div className="row w-100 align-items-center">
                    <div className="col text-center">
                        <button onClick={onPrevios}>previos</button>
                        <button onClick={onNext}>next</button>
                    </div>
                </div>
            </div>

        </>
        
    )
}