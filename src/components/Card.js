import React from 'react';
import '../styling/Card.css';

class Card extends React.Component {


    

    render(){
        return(
            <div id="div-card">
                <div id="div-card-container">
                    <div>

                        <img src="" alt="Your face" id="picture"/>
                        
                        <p >{this.props.fname} {this.props.lname}</p>
                    </div>
                    <div>
                        <p >{this.props.bday}</p>
                        <p >{this.props.number}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;