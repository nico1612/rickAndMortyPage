import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { PersonajeCard } from "../components"
import { getPersonajes } from "../slice/personajes"


export const PersonajePage=()=>{

    const dispatch =useDispatch()
    const {id}= useParams()
    const {personajes=[],page} =useSelector(state=>state.personajes)
    const ids=parseInt(id,10)

    useEffect(()=>{
        dispatch(getPersonajes(page))
    },[])

    const personaje=personajes[((ids-1))];
    console.log(personaje)
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
                        <li className="list-group-item"><b>species:</b> {personaje.species}</li>
                        <li className="list-group-item"><b>type:</b> {personaje.type}</li>
                        <li className="list-group-item"><b>gender:</b> {personaje.gender}</li>
                        <li className="list-group-item"><b>origen:</b> {personaje.origin}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}