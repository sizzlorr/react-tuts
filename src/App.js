import React, { Component } from 'react';
import './App.css';
import styles from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            {
                name: 'Igor',
                age: 24,
                id: 'fvfv'
            },
            {
                name: 'Vlada',
                age: 22,
                id: 'bjgn'
            },
            {
                name: 'Ann',
                age: 23,
                id: 'dfvccx'
            }
        ],
        showPersons: false
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
           return p.id === id;
        });

        // const person = Object.assign({}, this.state.persons[personIndex]);
        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState(
            {persons: persons}
        );
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {
        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
           persons = (
               <div>
                   {this.state.persons.map((person, index) => {
                       return <ErrorBoundary key={person.id}>
                           <Person
                               name={person.name}
                               age={person.age}
                               click={this.deletePersonHandler.bind(this, index)}
                               changed={(event) => this.nameChangeHandler(event, person.id)} />
                       </ErrorBoundary>
                   })}
               </div>
           );
        }

        let classes = [];
        if (this.state.persons.length <=2) {
            classes.push(styles.red);
        }
        if (this.state.persons.length <=1) {
            classes.push(styles.bold);
        }

        btnClass = styles.Red;

        return (
            <div className={styles.App}>
                <header>
                    <h1>Toggle persons</h1>
                    <p className={classes.join(' ')}>Some sentence</p>
                </header>
                <button onClick={this.togglePersonsHandler} className = {btnClass}>
                    Switch name
                </button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Some text'));
    }
}

export default App;
