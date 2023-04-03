import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UbicacionesCards } from "../componentes"
import { Button } from "../../ui/Button"


export const UbicacionesPage=()=>{

    const {pages} = useParams()

    
    const [page,setPage]=useState(parseInt(pages,10))
    const [ubicaciones,setUbicaciones]=useState([])
    const [reload,setReload]=useState([false])

    useEffect(()=>{
        const cargarUsuarios=async()=>{
            setUbicaciones([])
            const results=await axios(`https://rickandmortyapi.com/api/location?page=${page}`)
            setUbicaciones(results.data.results)
        }
        cargarUsuarios()
        setReload(false)
    },[reload])



    return(

        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {ubicaciones.map(ubicacion=>(
                    <UbicacionesCards
                        key={ubicacion.id}
                        {...ubicacion}
                    />
                ))}
            </div>

            <Button limit={42} page={page} setReload={setReload} setPage={setPage}/>
        </>
    )
}