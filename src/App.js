import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map from 'pigeon-maps';
import Pin from './Pin';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 0,
      long: 0,
      accuracy: 0,
      pins: [
        {
          id: 0,
          lat: 49.087707,
          long: 2.505758,
          infos: {
            name: 'Skateparks de marly-la-ville',
            condition: 5
          }
        },
        {
          id: 1,
          lat: 49.087965,
          long: 2.559108,
          infos: {
            name: 'Skateparks de Saint Witz',
            condition: 5
          }
        },
        {
          id: 2,
          lat: 49.0330887,
          long: 2.4817129,
          infos: {
            name: 'Skateparks de Goussainville',
            condition: 3,
          }
        },
        {
          id: 3,
          lat: 49.0511821,
          long: 2.5099468,
          infos: {
            name: 'Skateparks de Louvres',
            condition: 2,
          }
        },
        {
          id: 4,
          lat: 48.8301638,
          long: 2.5244394,
          infos: {
            name: 'Skatepaks de Brie sur Marne',
            condition: 5,
          }
        }
      ]
    }
  }

  render() {

    let currentState = this;

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      const crd = pos.coords;
      currentState.setState(
        {
          lat: crd.latitude,
          long: crd.longitude,
          accuracy: crd.accuracy,
        }
      )
    }

    function error(err) {
      console.warn(`ERREUR (${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    const latitude = this.state.lat;
    const longitude = this.state.long;
    const accuracy = this.state.accuracy;
    const { pins } = this.state;

    // compute the distance in meters or kilometers between two POI.
    const getDistanceBetween = (userLat, userLong, pinLat, pinLong) => {
      const Radius = 6371; // for km (change this const to get miles)
      const distanceLat = (userLat - pinLat) * Math.PI / 180;
      const distanceLong = (userLong - pinLong) * Math.PI / 180;
      const a = Math.sin(distanceLat/2) * Math.sin(distanceLat/2) +
        Math.cos(userLat * Math.PI / 180 ) * Math.cos(pinLat * Math.PI / 180 ) *
        Math.sin(distanceLong/2) * Math.sin(distanceLong/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const distance = Radius * c;
      if (distance>1) return Math.round(distance)+"km";
      else if (distance<=1) return Math.round(distance*1000)+"m";
      return distance;
    }

    return (
      <div className="App">
        <header>
          <h1>Skateparks-map</h1>
        </header>
        <Map center={[latitude, longitude]} zoom={14} onclick={(e) => { console.log('coucou') }}>
          {pins.map((pin, index) => (
            <Pin
              distance={getDistanceBetween(latitude,longitude,pin.lat, pin.long)}
              key={index}
              anchor={[pin.lat, pin.long]}
              infos={pin.infos}
              id={index}
            />
          ))}
        </Map>
        <footer>
          <small>lat:{latitude} long:{longitude} acc:{accuracy} meters.</small>
        </footer>
      </div>
    )
  }
}

export default App;
