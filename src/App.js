import './App.css';
import React, { Component } from 'react';
import Map from './components/Map/Map';
import Navigation from './components/Navigation/Navigation';
import Statistics from './components/Statistics/Statistics';
import 'leaflet/dist/leaflet.css';

class App extends Component {

  render () {
    return (
      <div className="App">
        <Navigation />
        <Map />
        <Statistics />
      </div>
    );
  }
}

export default App;
