
import React ,{Component}from 'react';
  // Import  What , Where
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';
import './App.css';

class App extends Component {
  state={
    persons:[
      { id:'1', name:"Sofie"},
      { id:'2', name:"Allie"},
      { id:'3', name:"Bob"}
    ]
  };

changeNameHandler = (newName) =>{
 this.setState({
   changableName:newName //Over riding the name Sofie
 })
}

passInput = (x) => {
  let deepCopy = [...this.state.persons];
  deepCopy[0].name=x;
  this.setState(({
    persons:deepCopy
  }));
}

  render(){
  return (
    <div className="App">
    <code>Q: 1,2,3,8</code>
      <UserInput words = {this.passInput}/>
      <UserOutput />
      <UserOutput />
      <UserOutput />
      <hr />
      <code> Q:4 </code>
      <UserOutput name="Bob" age="32"/>
      <hr/>
      <code>Q:5 </code>
     <UserOutput name={this.state.persons[1].name} />
     <hr/>
     <code> Q:6 </code>
     <UserOutput name ={this.state.persons[0].name}/>
    </div>
  );
}
}
export default App;
