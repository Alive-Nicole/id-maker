import React from 'react';
import Card from './Card';
import Colors from './Colors';
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
        // console.log(event.target.files[0]);
        this.setState({img: event.target.files[0]});
    }

    uploadImg = () => {
        var preview = document.getElementById('picture');
        // console.log(preview); 
        var file = this.state.img;
        var reader  = new FileReader();
      
        reader.addEventListener("load", function () {
            // console.log(reader.result);
          preview.src = reader.result;
          
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }
    }

    printID = () => {
        console.log("Printing!");
        
        //this only prints out the contents and not the styling as well
        var printIdCard = document.getElementById('picture');
        var w = window.open();
        w.document.write(printIdCard);
        w.print();
        w.close();
        
    }

    render(){
        return(
            <div>
                <form className="steps-container">
                    <h3>Step 1: Choose a photo!</h3>
                    <input id="files" type="file" onChange={this.chooseImg.bind(this)}/>
                    <button onClick={this.uploadImg}>Upload!</button>

                    <br/>
                    <h3>Step2: Fill out the information!</h3>
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
                    <input id="phoneNumber" type="tel" required
                        placeholder="xxx-xxx-xxxx"
                        onChange={event => this.setState({number: event.target.value})}/>
                    <br />
                    <h3>Step 3: Style it!</h3>
                    <Colors />
                </form>
                
                <hr />
                <Card fname={this.state.fname} 
                    lname={this.state.lname} 
                    bday={this.state.bday} 
                    number={this.state.number}/>
                <hr />
                <div className="steps-container">
                    <h3>Step 4: Print!</h3>
                    <button onClick={this.printID}>Print</button>
                </div>
                
            </div>
            
        );
    }
}

export default Form;