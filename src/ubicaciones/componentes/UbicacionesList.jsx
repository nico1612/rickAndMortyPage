import { useSelector } from "react-redux"
import { UbicacionesCards } from "./"


export const UbicacionesList=()=>{


    const {ubicaciones} =useSelector(state=>state.ubicaciones)

    return(
        <div className="row rows-cols-1 row-cols-md-2 g-3">
            {ubicaciones.map(ubicacion=>(
                <UbicacionesCards
                    key={ubicacion.id}
                    {...ubicacion}
                />
            ))}
        </div>
    )
}