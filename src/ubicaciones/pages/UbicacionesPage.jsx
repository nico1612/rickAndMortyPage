import { useEffect,} from "react"
import { useDispatch } from "react-redux"
import { getUbicaciones } from "../../slice"
import { Button, UbicacionesList } from "../componentes"


export const UbicacionesPage=()=>{

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch( getUbicaciones() );
    },[])

    return(

        <>
            <div className="d-grid gap-3">
                <div className="p-2">
                    <UbicacionesList/>
                </div>
                <div className="p-2">
                    <Button/>
                </div>
            </div> 
        </>
    )
}