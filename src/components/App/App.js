import React, { Component } from 'react';
import './App.css';

import HomePage from '../pages/HomePage/HomePage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
