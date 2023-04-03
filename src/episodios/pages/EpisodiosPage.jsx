import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { EpisodiosCards } from "../componentes"
import { Button } from "../../ui/Button"

export const EpisodiosPage=()=>{
    
    const {pages} = useParams()
    const [page,setPage]=useState(parseInt(pages,10))
    const [episodios,setEpisodios]=useState([])
    const [reload,setReload]=useState([false])

    useEffect(()=>{
        const cargarEpisodios=async()=>{
            console.log(pages)
            setEpisodios([])
            const results=await axios(`https://rickandmortyapi.com/api/episode/?page=${page}`)
            setEpisodios(results.data.results)
        }
        cargarEpisodios()
        setReload(false)
    },[reload])

    
    console.log(episodios)
    
    return(
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {episodios.map( episodio=>( 
                    <EpisodiosCards key={episodio.id} {...episodio}/>
                ))}
                
            </div>
            <Button limit={3} page={page} setReload={setReload} setPage={setPage}/>
        </>
    )
}