

export const Button =({page,getPersonajes,dispatch})=>{

    
    const onPrevios=()=>{
        if(page===1)return;

        dispatch( getPersonajes(page-1) )
    }
    
    const onNext=()=>{
        if(page===42)return;
        
        dispatch( getPersonajes(page+1) )
        
    }
    return(
        <div className="container-fluid h-100"> 
            <div className="row w-100 align-items-center">
                <div className="col text-center">
                    <div className="btn-group btn-group-lg mr-4" role="group" aria-label="First group">
                        <button type="button" class="btn btn-primary" onClick={onPrevios}>previos</button>
                    </div>
                    <div className="btn-group btn-group-lg mr-4" role="group" aria-label="Second group">
                        <button type="button" class="btn btn-primary" onClick={onNext}>next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}