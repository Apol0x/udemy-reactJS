import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList.js';
import './App.css';

const cities = [
  "Madrid, es",
  "Seville, es",
  "Berlin, ger"
];

class App extends Component {
 
  handlerClickWeatherLocation = (city) => {
    console.log("handlerClickWeatherLocation from App:", city);
   
  };
  render() {
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                TITULO
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
            <div className="details"></div>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default App;
