import React from 'react';
import './UserOutput.css';

//Name of the component not just a Variable
const UserOutput = (props)=>{
  return(
    <div className="box">

<p>My name is {props.name}</p>
<p>I am learning web development </p>
    </div>
  )
};




export default UserOutput;
