import { Navigate, Route, Routes } from "react-router-dom"
import { EpisodiosPage } from "../episodios"
import { UbicacionesPage } from "../ubicaciones"
import { Navbar } from "../ui"
import { PersonajesPage } from "../personajes"

export const RouterApp=()=>{

    return (
        <>
            <Navbar/>

            <div className="container bg-dark">
                <Routes>
                    <Route path="/" element={<Navigate to="personajes/1"/>}/>
                    <Route path="personajes/:pages" element={<PersonajesPage/>}/>
                    <Route path="episodios/:pages" element={<EpisodiosPage/>}/>
                    <Route path="ubicaciones/:pages" element={<UbicacionesPage/>}/>

                    
                    <Route path="/*" element={<Navigate to="personajes/1"/>}/>

                </Routes>
            </div>
        </>
    )
}