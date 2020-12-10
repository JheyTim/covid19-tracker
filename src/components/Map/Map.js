import React, {Fragment} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import classes from './Map.module.css';

const Map = (props) => {
    const icon = new Icon({
        iconUrl: 'https://cdn1.iconfinder.com/data/icons/locations-6/48/1-512.png',
        iconSize: [30, 30]
    });

    let map = props.data ? (
        <MapContainer center={[0, 0]} zoom={3} minZoom={3} maxZoom={10}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' noWrap={true} />
            {props.data.map(info => {
                console.log(info.countryInfo._id)
                return (
                    <Marker key={info.country} position={[info.countryInfo.lat, info.countryInfo.long]} icon={icon}>
                    <Popup>
                        <div className={classes.Popup}>
                            <div className={classes.Flag}>
                                <img src={info.countryInfo.flag} alt={info.country + " flag" }/>
                            </div>
                            <h2>{info.country}</h2>
                            <ul>
                                <li><strong>Confiremd:</strong> {info.cases}</li>
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
    ) : <p>Data is Loading</p>

    return (
        <Fragment>
            {map}
        </Fragment>
    )
};

export default Map;