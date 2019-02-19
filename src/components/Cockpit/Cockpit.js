import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
    let classes = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = styles.Red;
    }

    if (props.persons.length <=2) {
        classes.push(styles.red);
    }
    if (props.persons.length <=1) {
        classes.push(styles.bold);
    }

    return(
        <div className={styles.Cockpit}>
            <header>
                <h1>Toggle persons</h1>
                <p className={classes.join(' ')}>Some sentence</p>
            </header>
            <button onClick={props.clicked} className = {btnClass}>
                Switch name
            </button>
        </div>
    );
};

export default cockpit;