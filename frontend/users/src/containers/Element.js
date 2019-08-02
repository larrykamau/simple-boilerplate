import React, { Component } from 'react'
import axios from 'axios'

class Element extends Component {
    state = {
        element:{}
    }

    componentDidMount() {
        const elementID = this.props.match.params.elementID;
        axios.get(`http://127.0.0.1:8000/api/${elementID}`).then(res => {
            this.setState({
                element: res.data
            });
            console.log(res.data);
        })
    }
    
    render() {
        return (
            <div className="container">
        <h2>Data Displayed below is a single element</h2>
        <div className="row">
            <div className="col-sm-4 py-2">
            <div className="card text-white bg-primary">
                <div className="card-body">
                    <h3 className="card-title">{this.state.element.title}</h3>
                    <a href="true">{this.state.element.magnet_link}</a>
                    <p className="card-text">{this.state.element.content}</p>
                </div>
            </div>
            </div>
        </div>
        </div>
            
        )
    }
}
export default Element
