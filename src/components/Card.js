import React from 'react';
import '../styling/Card.css';

class Card extends React.Component {


    

    render(){
        return(
            <div id="div-card">
                <div id="div-card-container">
                    <div id="div-pic-name">

                        <img src="http://www.iconninja.com/files/373/611/612/person-user-profile-male-man-avatar-account-icon.svg" alt="Your face" id="picture" width="100" height="100"/>
                        
                        <p id="name">{this.props.fname} {this.props.lname}</p>
                    </div>
                    <div id="div-other-info">
                        <p>Birthday: {this.props.bday}</p>
                        <p>Phone Number: {this.props.number}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;