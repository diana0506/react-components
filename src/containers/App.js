import React, { Component } from 'react';
import styled from "styled-components";
import App from "./App";
// import Radium,{StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

const StyledButton = styled.button `
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
            { id:'a', name: "Max", age: 28 },
            { id:'b', name: "Manu", age: 29 },
            { id:'c', name: "Stephanie", age: 26 }
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
            persons =  
            <div> 
              <Persons
               persons={this.state.persons}
               clicked={this.state.deletePersonHandler}
               changed={this.nameChangedHandler} />  
            </div>
               
        }
        
        return(<div className = {classes.App}>
            <Cockpit
            title={this.props.appTitle}
             showPersons = {this.state.showPersons}
             persons={this.state.persons}
             clicked = {this.togglePersonsHandler} />
             
            {persons}
            </div>
            );
        
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;