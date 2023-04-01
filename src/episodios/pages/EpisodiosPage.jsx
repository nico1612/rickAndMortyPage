import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { EpisodiosCards } from "../componentes"

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

    const onPrevios=()=>{
        if(page===1)return;

        setPage(page-1)
        setReload(true)
    }

    
    const onNext=()=>{
        if(page===3)return;

        console.log(page)
        setPage(page+1)
        setReload(true)
        
    }
    
    console.log(episodios)
    
    return(
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {episodios.map( episodio=>( 
                    <EpisodiosCards key={episodio.id} {...episodio}/>
                ))}
                
            </div>
            <button onClick={onPrevios}>previos</button>
            <button onClick={onNext}>next</button>
        </>
    )
}