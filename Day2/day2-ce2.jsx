import React from 
"react";
function F1(){
  
    const Divst={
        backgroundColor: 'lightblue',
        color: 'darkblue',
        padding: '10px',
        border: '1px solid blue',
        borderRadius: '5px'
    }
 

        return(
            <div style={Divst}>
                <h1 style= {{color:"green"}}>Inline Style in JSX Example.</h1>
                <p style={{color:"darkblue"}}>This is a paragraph with inline styles applied.</p>
        </div>
        )
    
}
export default F1;