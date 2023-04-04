import { useEffect,} from "react"
import { useDispatch } from "react-redux"
import { UbicacionesList } from "../componentes/UbicacionesList"
import { getUbicaciones } from "../../slice/ubicaciones"
import { Button } from "../componentes/Button"


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
                <div className="p-2">Elemento de cuadrícula 3</div>
            </div> 
        </>
    )
}