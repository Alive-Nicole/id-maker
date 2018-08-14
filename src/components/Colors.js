import React from 'react';
import '../styling/Colors.css';
// import ReactHoverObserver from 'react-hover-observer';
//testing and learning how to use ReactHoverObserver

class Colors extends React.Component {
    //trying to figure out a more DRY method for this color change

    //hover events for the red-ish color
    renderRedColor(e){
       
        document.getElementById("div-card-container").style.backgroundColor = "#ff6666"
    }

    unrenderRedColor(e){
        
        document.getElementById("div-card-container").style.backgroundColor = "white"
    }

    //hover events for the orange-ish color
    renderOrangeColor(e){
        
        document.getElementById("div-card-container").style.backgroundColor = "#ff9933"
    }

    unrenderOrangeColor(e){
        
        document.getElementById("div-card-container").style.backgroundColor = "white"
    }

    //hover events for the yellow-ish color
    renderYellowColor(e){
       
        document.getElementById("div-card-container").style.backgroundColor = "#ffcc66"
    }

    unrenderYellowColor(e){
        
        document.getElementById("div-card-container").style.backgroundColor = "white"
    }

    //hover events for the green-ish color
    renderGreenColor(e){
     
        document.getElementById("div-card-container").style.backgroundColor = "#99ff66"
    }

    unrenderGreenColor(e){
        
        document.getElementById("div-card-container").style.backgroundColor = "white"
    }

    //hover events for the blue-ish color
    renderBlueColor(e){
       
        document.getElementById("div-card-container").style.backgroundColor = "#66ffcc"
    }

    unrenderBlueColor(e){
      
        document.getElementById("div-card-container").style.backgroundColor = "white"
    }

    //hover events for the indigo-ish color
    renderIndigoColor(e){
        
        document.getElementById("div-card-container").style.backgroundColor = "#9999ff"
    }

    unrenderIndigoColor(e){
        
        document.getElementById("div-card-container").style.backgroundColor = "white"
    }

    //hover events for the violet-ish color
    renderVioletColor(e){
    
        document.getElementById("div-card-container").style.backgroundColor = "#ff99ff"
    }

    unrenderVioletColor(e){
        
        document.getElementById("div-card-container").style.backgroundColor = "white"
    }

    render(){
        return (
            <div>
                    <div id="div-colors-container">
                        <div id="_ff6666"
                            onMouseEnter={this.renderRedColor} onMouseLeave={this.unrenderRedColor}></div>
                        <div id="_ff9933"
                            onMouseEnter={this.renderOrangeColor} onMouseLeave={this.unrenderOrangeColor}></div>
                        <div id="_ffcc66"
                            onMouseEnter={this.renderYellowColor} onMouseLeave={this.unrenderYellowColor}></div>
                        <div id="_99ff66"
                            onMouseEnter={this.renderGreenColor} onMouseLeave={this.unrenderGreenColor}></div>
                        <div id="_66ffcc"
                            onMouseEnter={this.renderBlueColor} onMouseLeave={this.unrenderBlueColor}></div>
                        <div id="_9999ff"
                            onMouseEnter={this.renderIndigoColor} onMouseLeave={this.unrenderIndigoColor}></div>
                        <div id="_ff99ff"
                            onMouseEnter={this.renderVioletColor} onMouseLeave={this.unrenderVioletColor}></div>
                    </div>
                
                
            </div>
        );
    }
}

export default Colors;