import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          
          <Route
            component={HomePage}
            exact
            path="/"
          />
          <Route
            path="/details"
            component={DetailsPage}
          />
        </div>
      </Router>
    );
  }
}

export default App;
