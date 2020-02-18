import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList.js';

const cities = [
  "Madrid, es",
  "Seville, es",
  "Berlin, ger"
];
class App extends Component {
  state = {
    valueTest: "sin actualizar"
  }

  handlerClickWeatherLocation = (city) => {
    console.log("handlerClickWeatherLocation from App:", city);
    this.setState({
      valueTest: city
    })
  };
  render() {
    return (
      <div className="App">
        <LocationList cities={cities} onSelectWeatherLocation={this.handlerClickWeatherLocation} />
        <div>Prueba de como sirve el "bubling" de evento {this.state.valueTest}</div>
      </div>
    );
  }
}

export default App;
