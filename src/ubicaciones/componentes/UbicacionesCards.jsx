
export const UbicacionesCards=({name,type,dimension})=>{

    return(
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutter">
                    <div>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>

                            <p className="card-text">{type} </p>

                            <p className="card-text">
                                <small className="text-muted">{dimension}</small>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}