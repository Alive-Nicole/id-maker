import React from 'react';
import Form from './Form';

class Card extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="div-card">
                <img src="" alt="Your picture"/>
                <p id="fname">{this.props.fname}</p>
                <p id="lname">{this.props.lname}</p>
                <p id="bday">{this.props.bday}</p>
                <p id="phnNumber">{this.props.phnNumber}</p>
            </div>
        );
    }
}

export default Card;