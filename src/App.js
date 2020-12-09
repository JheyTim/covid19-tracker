import './App.css';
import React, { Component } from 'react';
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class App extends Component {
  render () {
    const icon = new Icon({
      iconUrl: 'https://cdn1.iconfinder.com/data/icons/locations-6/48/1-512.png',
      iconSize: [30, 30]
    });
    return (
      <div className="App">
        <MapContainer center={[38.9072, -77.0369]} zoom={1.5}>
          <TileLayer url="https:{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
          <Marker position={[38.9072, -77.0369]} icon={icon}>
            <Popup>
              Hello
            </Popup>
          </Marker>
          
        </MapContainer>
      </div>
    );
  }
}

export default App;
