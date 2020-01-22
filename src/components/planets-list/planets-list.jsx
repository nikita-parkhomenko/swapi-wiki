import React, {Component} from 'react';

import {Planet} from './planet/planet';
import {SearchBox} from '../search-box/search-box';

import './planets-list.css'

class PlanetsList extends Component {

state = {
    planets: [],
    searchField: ''
}

componentDidMount() {
    fetch( 'https://swapi.co/api/planets/' )
      .then( resp => resp.json())
      .then(planets => this.setState({ planets: planets.results }))
  }

    render() {
        const {planets, searchField} = this.state;

        const filteredPlanets = planets.filter(planet => 
            planet.name.toLowerCase().includes(searchField.toLowerCase())
            );

        return (
            <>
                <SearchBox placeholder="search planet"
                    handlerChanged={ e => this.setState({ searchField: e.target.value })} />
                <div className="planets-list">
                    {filteredPlanets.map( planet => (
                        <Planet key={planet.diameter} planet={planet} />
                    ))}
                </div>
            </>
        )
    }
}

export default PlanetsList;