import React, {Fragment, Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import classes from './Map.module.css';

class Map extends Component {
    
    render () {
        const icon = new Icon({
            iconUrl: 'https://cdn1.iconfinder.com/data/icons/locations-6/48/1-512.png',
            iconSize: [30, 30]
        });
    
        let map = <p>Data is Loading</p>
        
        if (this.props.data.length > 0) {
            map = (
                <MapContainer center={[0, 0]} zoom={3} minZoom={3} maxZoom={10} maxBounds={[[180, -180], [-180, 180]]}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' noWrap={true} />
                    {this.props.data.map(info => {
                        return (
                            <Marker key={info.country} position={[info.countryInfo.lat, info.countryInfo.long]} icon={icon}>
                            <Popup>
                                <div className={classes.Popup}>
                                    <img src={info.countryInfo.flag} alt={info.country + " flag" }/>
                                    <h2>{info.country}</h2>
                                    <ul>
                                        <li><strong>Confirmed:</strong> {info.cases}</li>
                                        <li><strong>Deaths:</strong> {info.deaths}</li>
                                        <li><strong>Recovered:</strong> {info.recovered}</li>
                                        <li><strong>Last Update:</strong> {new Date(info.updated).toLocaleString()}</li>
                                    </ul>
                                </div>
                            </Popup>
                            </Marker>
                        )
                    })}
                </MapContainer>
            )
        }
        return (
            <Fragment>
                {map}
            </Fragment>
        )
    }
}

export default Map;