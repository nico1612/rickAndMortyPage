import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { UbicacionesList } from "../componentes/UbicacionesList"
import { getUbicaciones } from "../../slice/ubicaciones"
import { Button } from "../componentes/button"


export const UbicacionesPage=()=>{


    const dispatch=useDispatch()

    useEffect(()=>{

        dispatch( getUbicaciones() );    
    },[])


    return(

        <>
            <UbicacionesList/>
            <Button  />
        </>
    )
}