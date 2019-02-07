import React from 'react';
import './Person.css';

const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}>This is {props.name}. He/she is {Math.floor(Math.random() * 30)} but not {props.age} years old</p>
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;