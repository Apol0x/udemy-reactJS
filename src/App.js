import React, { Component } from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation/index';
import LocationList from './components/LocationList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList />
        {/* <WeatherLocation city="Madrid, spa"/> */}
      </div>
    );
  }
}

export default App;
