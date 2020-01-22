import React from 'react';

import './search-box.css';

export const SearchBox = ({ placeholder, handlerChanged }) => (
    <input className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={handlerChanged} />
)