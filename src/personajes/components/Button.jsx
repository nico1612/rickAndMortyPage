import { useDispatch, useSelector } from "react-redux"
import { getPersonajes } from "../../slice/personajes"
import { Button2 } from "../../ui/Button2"

export const Button =()=>{

    const dispatch=useDispatch()
    const {page} =useSelector(state=>state.personajes)

    const onPrevios=()=>{
        if(page===1)return;

        dispatch( getPersonajes(page-1) )
    }
    
    const onNext=()=>{
        if(page===42)return;
        
        dispatch( getPersonajes(page+1) )
        
    }

    return(
        <Button2 onNext={onNext} onPrevios={onPrevios}/>
    )

}