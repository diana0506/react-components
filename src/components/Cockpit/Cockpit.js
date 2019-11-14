import React from 'react';
import classes from './Cockpit';


const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = calsses.Red;
    }
    btnClass = classes.Red;
        if (props.persons.length <= 2) {
            assignedClasses.push(classes.red); //classes=['red']
        }
        if (props.persons.length <= 1) {
            assignedClasses.push(classes.bold); // classes =['red','bold']
        }
    return (
        <div classNmae ={classes.Cockpit}>
         <h1> Hi, I 'm a React App</h1> 
        <p className = { assignedClasses.join(" ") } > This is really working! </p>
         < button className = { btnClass }
        onClick = { this.togglePersonsHandler } > Toggle Persons </button>
        </div>
    );
};

export default cockpit;