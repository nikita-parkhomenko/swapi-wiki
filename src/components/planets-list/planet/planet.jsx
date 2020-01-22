import React from 'react';

import './planet.css';

export const Planet = ({planet}) => (
    <div className="planet">
        <h1> {planet.name} </h1>
        <p>Population: {planet.population}</p>
        <p>Climate: {planet.climate}</p>
    </div>
);