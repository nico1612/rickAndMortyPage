
export const EpisodiosCards=({id,name,air_date,episode,created})=>{

    return(

        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutter">
                    
                    <div>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>

                            <p className="card-text">{air_date} </p>
                            
                            
                            <p className="card-text">
                                <small className="text-muted">{episode}</small>
                            </p>

                            <p className="card-text">
                                <small className="text-muted">{created}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
    
}