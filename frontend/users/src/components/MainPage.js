import React from 'react'

const MainPage = props => {
    return (
        <div className="container">
        <h2>This boilerplate comes with its own login procedures</h2>
        <h5>Data Displayed below means django server is running ;)</h5>
        <div className="row">
            {props.data.map((element, index) =>(
                <div className="col-sm-4 py-2">
                <div key={index} className="card text-white bg-primary">
                    <div className="card-body">
                        <h3 className="card-title">{element.title}</h3>
                        <p className="card-text">{element.content}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
        </div>

    )
}


export default MainPage
