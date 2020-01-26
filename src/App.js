import React from 'react';
import Map from 'pigeon-maps';
import Pin from './Pin';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      lat: 0,
      long: 0,
      accuracy: 0,
    }
  }
  
  render () {
    
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
          isLoading: false,
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
    const { isLoading } = this.state;

    if(isLoading) {
      return <div>Loading</div>
    } else {
      return (
        <div className="App">
          <h1>Skateparks-map</h1>
          <p>Ta latitude est : {latitude} <br/> ta longitude est : {longitude} <br/> la précision est de {accuracy} mètres.</p>
          <Map center={[`${latitude}`, `${longitude}`]} zoom={14} width={600} height={400}>
            <Pin anchor={[`${latitude}`, `${longitude}`]} offset={[0, 0]} />
          </Map>
        </div>
      )
    }
  }
}

export default App;
