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

    makeId(){
        // this.setState({fname: });
    }

    render(){
        return(
            <div>
                <label for="firstName">First Name: </label>
                <br/>
                <input id="firstName" placeholder="First Name"/>
                <br />
                <label for="lastName">Last Name: </label>
                <br/>
                <input id="lastName" placeholder="Last Name"/>
                <br/>
                <label for="birthday">Birthday: </label>
                <br/>
                <input id="birthday" placeholder="Birthday"/>
                <br />
                <label for="phoneNumber">Phone Number: </label>
                <br/>
                <input id="phoneNumber" placeholder="Phone Number"/>
                <br/>
                <button>Create!</button>
            </div>
            
        );
    }
}

export default Form;