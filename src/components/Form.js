import React from 'react';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            fname: '',
            lname: '',
            bday: '',
            phnNumber: ''
        }
    }


    render(){
        return(
            <div>
                <label for="firstName">First Name: </label>
                <br/>
                <input id="firstName" placeholder="First Name"
                    onChange={event => this.setState({fname: event.target.value})}/>
                <br />
                <label for="lastName">Last Name: </label>
                <br/>
                <input id="lastName" placeholder="Last Name"
                    onChange={event => this.setState({lname: event.target.value})}/>
                <br/>
                <label for="birthday">Birthday: </label>
                <br/>
                <input id="birthday" placeholder="Birthday"
                    onChange={event => this.setState({bday: event.target.value})}/>
                <br />
                <label for="phoneNumber">Phone Number: </label>
                <br/>
                <input id="phoneNumber" placeholder="Phone Number"
                    onChange={event => this.setState({phnNumber: event.target.vaue})}/>
                <br/>
            </div>
            
        );
    }
}

export default Form;