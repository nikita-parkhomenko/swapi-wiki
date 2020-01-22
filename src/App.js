import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import PlanetsList from './components/planets-list/planets-list';
import PersonsList from './components/persons-list/persons-list';
import {Header} from './components/header/header';
import PersonDetails from './components/persons-list/person-details/person-details';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" exact render={() => <h1 className="title">Welcome to Swapi Wikipedia!</h1>} />
          <Route path="/planets" component={PlanetsList} />
          <Route path="/persons" exact component={PersonsList} />
          <Route path="/persons/:id" render={ ({match}) => {
            const {id} = match.params;
            return <PersonDetails id={id} />
          }} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
