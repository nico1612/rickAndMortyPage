import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const PersonajePage=()=>{

    const {id}= useParams()
    const ids=parseInt(id,10)

    const [personaje,setPersonaje] =useState({})    

    useEffect(()=>{
        const cargarPersonaje=async()=>{
            const resp = await fetch(`https://rickandmortyapi.com/api/character/${ids}`);
            const data = await resp.json();
            setPersonaje(data)
            console.log(personaje)
        }
        cargarPersonaje()
    },[])

     
    return (

        <>

            <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={personaje.image}
                        alt={personaje.name}
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    >
                    </img>
                </div>
                <div className="col-8">
                    <h3>{personaje.name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>status:</b> {personaje.status}</li>
                        <li className="list-group-item"><b>species:</b> {personaje.species}</li>
                        <li className="list-group-item"><b>type:</b> {personajes.type}</li>
                        <li className="list-group-item"><b>gender:</b> {personaje.gender}</li>
                        <li className="list-group-item"><b>origen:</b> {personaje.origin.name}</li>
                    </ul>
                </div>
            </div>

        </>

    )
}