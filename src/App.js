import React from 'react';
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
            condition: 3
          }
        },
        {
          id: 3,
          lat: 49.0511821,
          long: 2.5099468,
          infos: {
            name: 'Skateparks de Louvres',
            condition: 2
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

    return (
      <div className="App">
        <header>
          <h1>Skateparks-map</h1>
        </header>
        <Map center={[49.087707, 2.505758]} zoom={14} onclick={(e) => { console.log('coucou') }}>
          {pins.map((pin, index) => (
            <Pin
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
