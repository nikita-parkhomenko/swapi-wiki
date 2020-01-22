import React, {Component} from 'react';

import {Spinner} from '../../UI/spinner/spinner';

import './person-details.css';

class PersonDetails extends Component {

    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        const {id} = this.props
        fetch(`https://swapi.co/api/people/${id}/`)
            .then( resp => resp.json())
            .then( person => this.setState({ person, loading: false }))
    }

    render() {

        if(this.state.loading) {
            return <Spinner />;
        }

        const {name, birth_year, eye_color, gender, hair_color, height, mass} = this.state.person;
        return (
            <div className="person-details">
                <h1> {name} </h1>
                <p>Birth year: {birth_year} </p>
                <p>Eye color: {eye_color} </p>
                <p>Gender: {gender} </p>
                <p>Hair color: {hair_color} </p>
                <p>Height: {height} </p>
                <p>Mass: {mass} </p>
            </div>
        )
    }
};

export default PersonDetails;