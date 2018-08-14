import React from 'react';
import Card from './Card';
import Colors from './Colors';
// import ReactHoverObserver from 'react-hover-observer'; 
import '../styling/Form.css';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            fname: '',
            lname: '',
            bday: '',
            number: '',
            img: ''
        }
    }

    chooseImg = (event) => {
        console.log(event.target.files[0]);
        this.setState({img: event.target.files[0]});
    }

    uploadImg = () => {
        var preview = document.getElementById('picture');
        console.log(preview); 
        var file = this.state.img;
        var reader  = new FileReader();
      
        reader.addEventListener("load", function () {
            console.log(reader.result);
          preview.src = reader.result;
          
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }
    }


    render(){
        return(
            <div>
                <form id="form-container">
                    <label>First Name: </label>
                    <br/>
                    <input id="firstName" required
                        onChange={event => this.setState({fname: event.target.value})}/>
                    <br />
                    <label>Last Name: </label>
                    <br/>
                    <input id="lastName" required
                        onChange={event => this.setState({lname: event.target.value})}/>
                    <br/>
                    <label>Birthday: </label>
                    <br/>
                    <input id="birthday"  type="date" required
                        onChange={event => this.setState({bday: event.target.value})}/>
                    <br />
                    <label>Phone Number: </label>
                    <br/>
                    <input id="phoneNumber" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
                        placeholder="xxx-xxx-xxxx"
                        onChange={event => this.setState({number: event.target.value})}/>
                    <span className="validity"></span>
                    <br/>
                    <br />
                    <input id="files" type="file" onChange={this.chooseImg.bind(this)}/>
                    <button onClick={this.uploadImg}>Upload!</button>
                </form>
                
                <hr />
                {/* <ReactHoverObserver {...{
                    onMouseOver: ({ e, setIsHovering, unsetIsHovering }) => {
                        
                    }
                }}>
                    <Colors {...this.state}/>
                </ReactHoverObserver> */}
                
                <Colors />
                <Card fname={this.state.fname} lname={this.state.lname} bday={this.state.bday} number={this.state.number}/>
            </div>
            
        );
    }
}

export default Form;