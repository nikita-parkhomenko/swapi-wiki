import React from 'react';
import {NavLink} from 'react-router-dom'

import './header.css';

export const Header = () => {

    return(
        <div className="header">
            <h2>
                <NavLink to="/">
                    Swapi-Wiki
                </NavLink>
            </h2>
            <ul>
                <li>
                    <NavLink to="/planets">Planets</NavLink>
                </li>
                <li>
                    <NavLink to="/persons">Persons</NavLink>
                </li>
                <li>
                    <NavLink to="/favorites">Favorites</NavLink>
                </li>
            </ul>
      </div>
      );
};
