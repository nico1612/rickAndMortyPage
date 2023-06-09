
export const Button2 =({onNext,onPrevios})=>{

    return(
        <div className="grid text-center">
            <div className="container-fluid h-100"> 
                <div className="row w-100 align-items-center">
                    <div className="col text-center d-grid gap-2 col-12 mx-auto">
                        <div className="btn-group btn-group-lg mr-4 g-col-6" role="group" aria-label="First group">
                            <button type="button" className="btn btn-primary " onClick={onPrevios}>previos</button>
                        </div>
                        <div className="btn-group btn-group-lg mr-4 g-col-6" role="group" aria-label="Second group">
                            <button type="button" className="btn btn-primary " onClick={onNext}>next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}