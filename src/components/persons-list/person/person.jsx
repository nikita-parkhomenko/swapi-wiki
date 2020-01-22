import React from 'react';

import './person.css';

export const Person = ({person, onItemSelected}) => (
    <div onClick={() => onItemSelected(person.id)} className="person">
        <h1> {person.name} </h1>
        <p> Gender: {person.gender} </p>
        <p> Birth Year: {person.birth_year} </p>
    </div>
)