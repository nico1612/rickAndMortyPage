import { useParams } from "react-router-dom"
import { PersonajesCards } from "../components"
import axios from "axios"
import { useEffect, useState } from "react"


export const PersonajesPage = ()=>{
    
    const {pages} = useParams()

    
    const [page,setPage]=useState(parseInt(pages,10))
    const [personajes,setPersonajes]=useState([])
    const [reload,setReload]=useState([false])

    useEffect(()=>{
        const cargarUsuarios=async()=>{
            setPersonajes([])
            const results=await axios(`https://rickandmortyapi.com/api/character/?page=${page}`)
            setPersonajes(results.data.results)
        }
        cargarUsuarios()
        setReload(false)
    },[reload])


    const onPrevios=()=>{
        if(page===1)return;

        setPage(page-1)
        setReload(true)
    }

    
    const onNext=()=>{
        if(page===42)return;

        setPage(page+1)
        setReload(true)
        
    }
    
    return(

        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {personajes.map(personaje=>(
                    <PersonajesCards
                        key={personaje.id}
                        {...personaje}
                    />
                ))}
            </div>

            <div className="container-fluid h-100"> 
                <div className="row w-100 align-items-center">
                    <div className="col text-center">
                        <button onClick={onPrevios}>previos</button>
                        <button onClick={onNext}>next</button>
                    </div>
                </div>
            </div>

        </>
        
    )
}