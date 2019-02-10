import React from 'react';
import './Person.css';
import styles from './Person.css';

const person = (props) => {
    const error = Math.random();

    if (error < 0.7) {
        throw new Error ('Something went wrong');
    }

    return (

        <div className={styles.Person}>
            <p onClick={props.click}>This is {props.name}. He/she is {Math.floor(Math.random() * 30)} but not {props.age} years old</p>
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;