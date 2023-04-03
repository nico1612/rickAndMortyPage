export const PersonajeCard=(name,status,species,type,gender,origin)=>{

    return(
        <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={`https://rickandmortyapi.com/api/character/avatar/1.jpeg`}
                        alt={name}
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    >
                    </img>
                </div>
                <div className="col-8">
                    <h3>{name}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>status:</b> {status}</li>
                        <li className="list-group-item"><b>species:</b> {species}</li>
                        <li className="list-group-item"><b>type:</b> {type}</li>
                        <li className="list-group-item"><b>gender:</b> {gender}</li>
                        <li className="list-group-item"><b>origen:</b> {origin}</li>
                    </ul>

                    {/*<button 
                        className="btn btn-outline-primary"
                        onClick={onReturn}
                    >
                        back
                    </button>*/}
                </div>
            </div>
    )
}