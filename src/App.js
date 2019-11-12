import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
// import Radium,{StyleRoot} from 'radium';
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${props => (props.active ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover: {
    background-color: ${props => (props.active ? "salmon" : "lightgreen")};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "dfsdf", name: "Max", age: 28 },
      { id: "kjljl", name: "Manu", age: 29 },
      { id: "hgjhj", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons =this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "LightGreen",
        color: "black"
      }
    };

    let persons = null;

    // cand ai un map, si o lista de elemente ( div sau altceva)
    // in react iti trebuie un prop 'key' ca sa diferentiezi intre elementele listei
    // poate sa fie index in lista ( nu e recomandat ) sau un id sau ceva de genu
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <div key={person.id}>
                {person.id}
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </div>
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); //classes=['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes =['red','bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton
          active={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
