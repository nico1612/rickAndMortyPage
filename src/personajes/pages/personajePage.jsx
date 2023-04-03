import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import axios from "axios"
import { getPersonajes } from "../../slice/personajes"


export const PersonajePage=()=>{

    const {id}= useParams()
    const [personaje,setPersonaje] =useState({})
    const ids=parseInt(id,10)

    const {personajes=[],page} =useSelector(state=>state.personajes)

    const dispatch=useDispatch()

    useEffect(()=>{

        dispatch( getPersonajes() );    
    },[])

    setPersonaje(personajes[ids-1])
        
    setPersonaje(Object.values(personaje))
    console.log(personaje)
    
    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={personaje[8]}
                        alt={personaje[1]}
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    >
                    </img>
                </div>
                <div className="col-8">
                    <h3>{personaje.name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>status:</b> {personaje[2]}</li>
                        <li className="list-group-item"><b>species:</b> {personaje[3]}</li>
                        <li className="list-group-item"><b>type:</b> {personaje[4]}</li>
                        <li className="list-group-item"><b>gender:</b> {personaje[5]}</li>
                        <li className="list-group-item"><b>origen:</b> {personaje[6].name}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}