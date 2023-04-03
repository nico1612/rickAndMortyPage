import { Navigate, Route, Routes } from "react-router-dom"
import { EpisodiosPage } from "../episodios"
import { UbicacionesPage } from "../ubicaciones"
import { Navbar } from "../ui"
import { PersonajePage, PersonajesPage } from "../personajes"

export const RouterApp=()=>{

    return (
        <>
            <Navbar/>

            <div className="container bg-dark">
                <Routes>
                    <Route path="/" element={<Navigate to="personajes"/>}/>
                    <Route path="personajes" element={<PersonajesPage/>}/>
                    <Route path="personaje/:id" element={<PersonajePage/>}/>

                    <Route path="episodios/:pages" element={<EpisodiosPage/>}/>
                    <Route path="ubicaciones/:pages" element={<UbicacionesPage/>}/>

                    
                    <Route path="/*" element={<Navigate to="personajes"/>}/>

                </Routes>
            </div>
        </>
    )
}