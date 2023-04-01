import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const PersonajePage=()=>{

    const {id}= useParams()
    const [personaje,setPersonaje]=useState([])

    useEffect(()=>{
        const cargarUsuarios=async()=>{
            const results=await axios(`https://rickandmortyapi.com/api/character/?id=${id}`)
            setPersonaje(results.data.results)
        }
        cargarUsuarios()
    },[])
    return (
        <>
        <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={`https://rickandmortyapi.com/api/character/avatar/1.jpeg`}
                        alt={personaje.name}
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    >
                    </img>
                </div>
                <div className="col-8">
                    <h3>{personaje.name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>status:</b> {personaje.status}</li>
                        <li className="list-group-item"><b>Publisher:</b> {personaje.species}</li>
                        <li className="list-group-item"><b>type:</b> {personaje.type}</li>
                        <li className="list-group-item"><b>gender:</b> {personaje.gender}</li>
                        <li className="list-group-item"><b>origen:</b> {personaje.origin}</li>
                    </ul>

                    {/*<button 
                        className="btn btn-outline-primary"
                        onClick={onReturn}
                    >
                        back
    </button>*/}
                </div>
            </div>
        </>
    )
}