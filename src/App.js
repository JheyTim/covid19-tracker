import './App.css';
import React, { Component } from 'react';
import Map from './components/Map/Map';
import Navigation from './components/Navigation/Navigation';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

class App extends Component {

  state = {
    data: []
  }
  
  async componentDidMount() {
    const res = await axios.get("https://corona.lmao.ninja/v2/countries");
    this.setState({ data: res.data })
  }

  render () {
    return (
      <div className="App">
        <Navigation />
        <Map data={this.state.data}/>
      </div>
    );
  }
}

export default App;
