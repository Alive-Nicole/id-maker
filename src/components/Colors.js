import React from 'react';
import '../styling/Colors.css';
// import ReactHoverObserver from 'react-hover-observer';
//testing and learning how to use ReactHoverObserver

class Colors extends React.Component {
    // state = {
        
    // }

    //methods are being called without being hovered over
    //https://www.npmjs.com/package/react-hover-observer
    renderColor(){
        console.log("Color is being rendered");
    }

    unrenderColor(){
        console.log("Color is no longer rendered");
    }

    render(){
        return (
            <div>
                    <div id="div-colors-container">
                        <div id="_ff6666"
                            onMouseEnter={this.renderColor()} onMouseLeave={this.renderColor()}></div>
                        <div id="_ff9933" width="15" height="15"></div>
                        <div id="_ffcc66" width="15" height="15"></div>
                        <div id="_99ff66" width="15" height="15"></div>
                        <div id="_66ffcc" width="15" height="15"></div>
                        <div id="_9999ff" width="15" height="15"></div>
                        <div id="_ff99ff" width="15" height="15"></div>
                    </div>
                
                
            </div>
        );
    }
}

export default Colors;


// const Colors = ({ isHovering = false }) => {
//     return(
//     <div id="div-colors-container">
//         <div id="_ff6666"
//             className="example_child"></div>
//         <div id="_ff9933" ></div>
//         <div id="_ffcc66" ></div>
//         <div id="_99ff66" ></div>
//         <div id="_66ffcc" ></div>
//         <div id="_9999ff" ></div>
//         <div id="_ff99ff" ></div>
//     </div>
//     );
    
                
// }

// export default Colors;