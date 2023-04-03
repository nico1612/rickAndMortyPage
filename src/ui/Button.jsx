

export const Button=({limit,page,setReload,setPage})=>{

    
    const onPrevios=()=>{
        if(page===1)return;

        setPage(page-1)
        setReload(true)
    }

    
    const onNext=()=>{
        if(page===limit)return;

        console.log(page)
        setPage(page+1)
        setReload(true)
        
    }

    return(
        <div className="container-fluid h-100"> 
            <div className="row w-100 align-items-center">
                <div className="col text-center">
                    <div className="btn-group btn-group-lg mr-4" role="group" aria-label="First group">
                        <button type="button" className="btn btn-primary" onClick={onPrevios}>previos</button>
                    </div>
                    <div className="btn-group btn-group-lg mr-4" role="group" aria-label="Second group">
                        <button type="button" className="btn btn-primary" onClick={onNext}>next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}