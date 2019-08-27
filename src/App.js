import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component{
  state = {
    persons : [
      {name:'Max', age:28},
      {name:'Manu', age:29},
      {name:'Stephanie', age:26}
    ],
    otherState : 'some other value'
  }
  switchNameHandler = (newName) => {
    //console.log("Button clicked!");
    this.setState({
      persons : [
        {name:newName, age:27},
        {name:'Manu', age:29},
        {name:'Stephanie', age:26}
      ]
    });
  }
  nameChangedHanlder = (event) => {
    console.log("Fired");
    this.setState({
      persons : [
        {name:"Tony", age:27},
        {name:event.target.value, age:29},
        {name:'Stephanie', age:26}
      ]
    });
  }
  render(){
    return (
      <div className="App">
          <h1>Hi I am React App</h1>
          <p> This is really working </p> 
          <button onClick={ ()=> this.switchNameHandler('Tony!')}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed = {this.nameChangedHanlder} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}  changed = {this.nameChangedHanlder} />
          <Person name={this.state.persons[2].name}  age={this.state.persons[1].age} 
          click={this.switchNameHandler} changed = {this.nameChangedHanlder}>My hobbies are racing & diving </Person>

      </div>
    );
  }
}
export default App;