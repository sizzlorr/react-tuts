import React, { Component } from 'react';
import './App.css';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

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

        if (this.state.showPersons) {
           persons = <Persons
                       persons={this.state.persons}
                       clicked={this.deletePersonHandler}
                       changed={this.nameChangeHandler} />
        }

        return (
            <div className={styles.App}>
                <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler} />
                {persons}
            </div>
        );
        // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Some text'));
    }
}

export default App;
