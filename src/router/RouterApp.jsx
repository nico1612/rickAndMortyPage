import { Navigate, Route, Routes } from "react-router-dom"
import { EpisodiosPage } from "../episodios/pages/EpisodiosPage"
import { PersonajesPage } from "../personajes/pages/PersonajesPage"
import { UbicacionesPage } from "../ubicaciones/pages/UbicacionesPage"
import { Navbar } from "../ui/Navbar"

export const RouterApp=()=>{

    return (
        <>
            <Navbar/>

            <div className="container bg-dark">
                <Routes>
                    <Route path="/" element={<Navigate to="personajes/1"/>}/>
                    <Route path="personajes/:pages" element={<PersonajesPage/>}/>
                    <Route path="episodios" element={<EpisodiosPage/>}/>
                    <Route path="ubicaciones" element={<UbicacionesPage/>}/>

                    
                    <Route path="/*" element={<Navigate to="personajes/1"/>}/>

                </Routes>
            </div>
        </>
    )
}