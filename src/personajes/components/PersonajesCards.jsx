import { Link } from "react-router-dom"

export const PersonajesCards=({id,name,status,species,image})=>{
  
    return(

        <div className="col animate__animated animate__fadeIn ">
            <div className="card bg-warning">
                <div className="row no-gutter">
                    <div className="col-4">
                        <img src={image} className="card-img" alt={name}/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>

                            <p className="card-text">{status} </p>
                            
                            
                            <p className="card-text">
                                <small className="text-muted">{species}</small>
                            </p>

                            <Link to={`/personaje/${id}`}>
                                más..
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}