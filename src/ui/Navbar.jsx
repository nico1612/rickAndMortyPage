import { Link, NavLink } from "react-router-dom"


export const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border" data-bs-theme="dark">
        <div className="container-fluid">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                home
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                        <NavLink
                            className={(isActive)=>`nav-item nav-link ${isActive ? 'active':''}`}
                            to="/personajes/1"
                        >
                            personajes
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={(isActive)=> `nav-item nav-link ${isActive?'active':''}`} 
                            to="/episodios/1"
                        >
                            episodios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={(isActive)=> `nav-item nav-link ${isActive?'active':''}`} 
                            to="/ubicaciones/1"
                        >
                            ubicaciones
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}