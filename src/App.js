
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

      <UserInput words = {this.passInput} name={this.state.persons[0].name} /> {/* Placeholdername gets passed*/}

      {this.state.persons.map( person => (
       <UserOutput name={person.name} key={person.id} />
      ))}

    </div>
  );
}
}
export default App;
