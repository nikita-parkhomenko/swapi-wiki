import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {SearchBox} from '../search-box/search-box';
import {Person} from './person/person';

import './persons-list.css';

class PersonsList extends Component {
    state = {
        persons: [],
        searchField: ''
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/')
            .then(resp => resp.json())
            .then( people => {
                return people.results.map(this.transformPerson)})
            .then( persons => this.setState({ persons }))
    }

    onItemSelected = (id) => {
        const {history} = this.props;
        console.log(id)
        history.push(`/persons/${id}`)
    }

    extractId = (item) => {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }

    transformPerson = (person) => {
        return {
            id: this.extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
        }
    }



    render() {
        
        const {persons, searchField} = this.state;

        const filteredPersons = persons.filter( person => 
            person.name.toLowerCase().includes(searchField.toLowerCase())
            );

        return(
            <>
                <SearchBox placeholder="search persons"
                    handlerChanged={ e => this.setState({ searchField: e.target.value })} />
                <div className="persons-list">
                    {filteredPersons.map( person => (
                        <Person onItemSelected={this.onItemSelected}
                         key={person.id} person={person} />
                    ))}
                </div>
            </>
        )
    }
}

export default withRouter(PersonsList);