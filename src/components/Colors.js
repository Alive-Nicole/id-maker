import React from 'react';
import '../styling/Colors.css';

class Colors extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            idColor: 'white'
        }
    }

    

    //events for the red-ish color
    setRedColor = () => {
       
        this.setState({idColor: '#ff6666'});
    }

    onRedColor = () => {
        document.getElementById('div-card-container').style.backgroundColor = '#ff6666';
    }

    

    //events for the orange-ish color
    setOrangeColor = () => {
        
        this.setState({idColor: '#ff9933'});
    }

    onOrangeColor = () => {
        document.getElementById('div-card-container').style.backgroundColor = '#ff9933';
    }

    //events for the yellow-ish color
    setYellowColor = () => {
       
        this.setState({idColor: '#ffff33'});
    }

    onYellowColor = () => {
        document.getElementById('div-card-container').style.backgroundColor = '#ffff33';
    }

    //events for the green-ish color
    setGreenColor = () => {
     
     this.setState({idColor: '#99ff66'});
    }

    onGreenColor = () => {
        document.getElementById('div-card-container').style.backgroundColor = '#99ff66';
    }

    //events for the blue-ish color
    setBlueColor = () => {
       
        this.setState({idColor: '#66ffcc'});
    }

    onBlueColor = () => {
        document.getElementById('div-card-container').style.backgroundColor = '#66ffcc';
    }

    //events for the indigo-ish color
    setIndigoColor = () => {
        
        this.setState({idColor: '#9999ff'});
    }

    onIndigoColor = () => {
        document.getElementById('div-card-container').style.backgroundColor = '#9999ff';
    }

    //evetns for the violet-ish color
    setVioletColor = () => {
    
        this.setState({idColor: '#ff99ff'});
    }

    onVioletColor = () => {
        document.getElementById('div-card-container').style.backgroundColor = '#ff99ff';
    }

    //onclick event for a white color
    setWhiteColor = () => {
        
        this.setState({idColor: 'white'});
    }

    onWhiteColor = () => {
        document.getElementById('div-card-container').style.backgroundColor = 'white';
    }

    //onMouseLeave event
    offColor = () => {
        // console.log(this.state.idColor)
        document.getElementById("div-card-container").style.backgroundColor = this.state.idColor;
    }

    render(){
        return (
            <div>
                    <div id="div-colors-container">
                        <div id="_ff6666" 
                            onClick={this.setRedColor} 
                            onMouseOver={this.onRedColor} 
                            onMouseLeave={this.offColor}></div>

                        <div id="_ff9933" 
                            onClick={this.setOrangeColor}
                            onMouseOver={this.onOrangeColor}
                            onMouseLeave={this.offColor}></div>

                        <div id="_ffff3" 
                            onClick={this.setYellowColor}
                            onMouseOver={this.onYellowColor}
                            onMouseLeave={this.offColor}></div>

                        <div id="_99ff66" 
                            onClick={this.setGreenColor}
                            onMouseOver={this.onGreenColor}
                            onMouseLeave={this.offColor}></div>

                        <div id="_66ffcc" 
                            onClick={this.setBlueColor}
                            onMouseOver={this.onBlueColor}
                            onMouseLeave={this.offColor}></div>

                        <div id="_9999ff" 
                            onClick={this.setIndigoColor}
                            onMouseOver={this.onIndigoColor}
                            onMouseLeave={this.offColor}></div>

                        <div id="_ff99ff" 
                            onClick={this.setVioletColor}
                            onMouseOver={this.onVioletColor}
                            onMouseLeave={this.offColor}></div>

                        <div id="white" 
                            onClick={this.setWhiteColor}
                            onMouseOver={this.onWhiteColor}
                            onMouseLeave={this.offColor}></div>
                    </div>
                
                
            </div>
        );
    }
}

export default Colors;