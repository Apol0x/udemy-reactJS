import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList.js';

const cities = [
  "Madrid, es",
  "Seville, es",
  "Berlin, ger"
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}/>
        {/* <WeatherLocation city="Madrid, spa"/> */}
      </div>
    );
  }
}

export default App;
