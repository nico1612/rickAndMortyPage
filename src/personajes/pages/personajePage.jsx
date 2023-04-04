import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPersonajes } from "../../slice/personajes"


export const PersonajePage=()=>{

    const {id}= useParams()
    const [personaje,setPersonaje] =useState({})
    const ids=parseInt(id,10)

    const {personajes=[],page} =useSelector(state=>state.personajes)

    const dispatch=useDispatch()

    useEffect(async()=>{
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await resp.json();
        console.log(data)
        setPersonaje(data.results)
    },[])

    //console.log(personaje)
    setPersonaje()
        
    setPersonaje(Object.values(personaje))
    
    return (

        <>
            <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={personajes[ids-1].image}
                        alt={personajes[ids-1].name}
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    >
                    </img>
                </div>
                <div className="col-8">
                    <h3>{personajes[ids-1].name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>status:</b> {personajes[ids-1].status}</li>
                        <li className="list-group-item"><b>species:</b> {personajes[ids-1].species}</li>
                        <li className="list-group-item"><b>type:</b> {personajes[ids-1].type}</li>
                        <li className="list-group-item"><b>gender:</b> {personajes[ids-1].gender}</li>
                        <li className="list-group-item"><b>origen:</b> {personajes[ids-1].origin.name}</li>
                    </ul>
                </div>
            </div>
        </>

    )
}