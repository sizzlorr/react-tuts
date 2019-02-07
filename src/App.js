import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: 'solid 1px orangered',
            padding: '4px 8px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            color: '#fff',
            borderRadius: '8px'
        };

        let persons = null;

        if (this.state.showPersons) {
           persons = (
               <div>
                   {this.state.persons.map((person, index) => {
                       return <Person
                           name={person.name}
                           age={person.age}
                           click={this.deletePersonHandler.bind(this, index)}
                           key={person.id}
                           changed={(event) => this.nameChangeHandler(event, person.id)} />
                   })}
               </div>
           );

           style.backgroundColor = 'red';
        }

        let classes = [];
        if (this.state.persons.length <=2) {
            classes.push('red');
        }
        if (this.state.persons.length <=1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <header className="App-header">
                    <h1>Toggle persons</h1>
                    <p className={classes.join(' ')}>Some sentence</p>
                </header>
                <button onClick={this.togglePersonsHandler} style={style}>
                    Switch name
                </button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Some text'));
    }
}

export default App;
