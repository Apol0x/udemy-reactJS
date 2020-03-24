import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { createStore } from 'redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList.js';
import './App.css';
import ForeCastExtended from './components/ForeCastExtend.js';

const cities = [
  "Madrid, es",
  "Seville, es",
  "Berlin, ger"
];

//Inicializamos la conexión con el redux-devtool
const store = createStore(() => { }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const actionSetCity = (value) => ({ type: 'setCity', value }) //generamos acciones

class App extends Component {
  constructor() {
    super();
    this.state = { city: null }
  }
  handlerClickWeatherLocation = (city) => {
    console.log("handlerClickWeatherLocation from App:", city);
    this.setState({
      city
    });
    store.dispatch(actionSetCity(city)); //despachamos la accion
  };
  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                WHEATHER APP
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectWeatherLocation={this.handlerClickWeatherLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              {
                city != null ? <div className="details">
                  <ForeCastExtended city={city}></ForeCastExtended>
                </div> : null
              }
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default App;
