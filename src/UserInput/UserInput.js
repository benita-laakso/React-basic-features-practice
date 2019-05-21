import React from 'react';
import  './UserInput.css';

//Inline styling
var divStyle = {
  color: 'blue'
};
//Name of the component not just a Variable
const UserInput = (props) => {

  function changeFunc(event) {
    props.words(event.target.value);
  }

  return(
    <div className="Persons">
      <input type="text" onChange={changeFunc} value ={props.name} style={divStyle}/>
    </div>
  )
};

export default UserInput;
