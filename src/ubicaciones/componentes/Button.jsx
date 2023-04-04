import { useDispatch, useSelector } from "react-redux";
import { getUbicaciones } from "../../slice/ubicaciones";
import { Button2 } from "../../ui/Button2";

export const Button =()=>{

    const dispatch=useDispatch()
    const {pages} =useSelector(state=>state.ubicaciones)

    const onPrevios=()=>{
        if(pages===1)return;

        dispatch( getUbicaciones(pages-1) )
    }
    
    const onNext=()=>{
        if(pages===42)return;
        
        dispatch( getUbicaciones(pages+1) )
        
    }

    return(
        <Button2 onNext={onNext} onPrevios={onPrevios}/>
    )
}