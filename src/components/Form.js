import React from 'react';
import Card from './Card';
import '../styling/Form.css';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            fname: '',
            lname: '',
            bday: '',
            number: ''
        }
    }


    render(){
        return(
            <div>
                <form id="form-container">
                    <label for="firstName">First Name: </label>
                    <br/>
                    <input id="firstName" 
                        onChange={event => this.setState({fname: event.target.value})}/>
                    <br />
                    <label for="lastName">Last Name: </label>
                    <br/>
                    <input id="lastName" 
                        onChange={event => this.setState({lname: event.target.value})}/>
                    <br/>
                    <label for="birthday">Birthday: </label>
                    <br/>
                    <input id="birthday"  type="date"
                        onChange={event => this.setState({bday: event.target.value})}/>
                    <br />
                    <label for="phoneNumber">Phone Number: </label>
                    <br/>
                    <input id="phoneNumber"
                        onChange={event => this.setState({number: event.target.value})}/>
                    <br/>
                </form>
                
                <hr />
                <Card fname={this.state.fname} lname={this.state.lname} bday={this.state.bday} number={this.state.number}/>
            </div>
            
        );
    }
}

export default Form;