import { useDispatch, useSelector } from "react-redux";
import { getEpisodios } from "../../slice/episodios/thunks";
import { Button2 } from "../../ui";

export const Button =()=>{

    const dispatch=useDispatch()
    const {page} =useSelector(state=>state.episodios)

    const onPrevios=()=>{
        if(page===1)return;

        dispatch( getEpisodios(page-1) )
    }
    
    const onNext=()=>{
        if(page===3)return;
        
        dispatch( getEpisodios(page+1) )
        
    }

    return(
        <Button2 onNext={onNext} onPrevios={onPrevios}/>
    )

}