import React, { Component } from 'react'
import MainPage from '../components/MainPage'
import axios from 'axios'

class Elements extends Component {
    state = {
        elements:[]
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/').then(res => {
            this.setState({
                elements: res.data
            });
            console.log(res.data);
        })
    }
    
    render() {
        return (
            <div >
                <MainPage data={this.state.elements}/>
            </div>
            
        )
    }
}
export default Elements
