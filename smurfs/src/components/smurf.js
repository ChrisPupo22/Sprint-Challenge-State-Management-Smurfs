import React, { useContext, useState } from 'react';
import Axios from 'axios';
import { smurfContext } from '../context/smurfContext';

class Smurf extends React.Component {
    constructor(){
        super()
            this.state = {
                name: '',
                age: '',
                height: ''
            }
    };
   
    changeHandler = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value})
            console.log()
        
    }

    submitHandler = (event) => {
        const formData = {
            name: this.state.name,
            age: Number(this.state.age), 
            height: this.state.height
        }
        console.log(formData)
        Axios.post('http://localhost:3333/smurfs', formData)
        .then(res => {
            console.log(res.data)
        })
        .catch('error' )
    }

    render() {
    return( 
        <div className='smurf-section'>
            <p>Please fill in your Smurfs information</p>
            <form onSubmit={this.submitHandler}>
                <input onChange={this.changeHandler} value={this.state.name} name='name' type='text' placeholder='Name your smurf!!' /> <br /> <br />
                <input onChange={this.changeHandler} value={this.state.age} name='age' type='number' placeholder='Age' /><br /> <br />
                <input onChange={this.changeHandler} value={this.state.height} name='height' type='text' placeholder='Height' /> <br /> <br />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}
}
export default Smurf; 