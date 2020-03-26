import React, { Component } from 'react';
import {connect} from 'react-redux';
import { PropTypes } from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList.js';
import './App.css';
import ForeCastExtended from './components/ForeCastExtend.js';
import { actionSetCity } from './actions';


const cities = [
  "Madrid, es",
  "Seville, es",
  "Berlin, ger"
];


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
    this.props.actionSetCity(city)
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

App.propTypes = {
  actionSetCity: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch =>({
  actionSetCity: value => dispatch(actionSetCity(value))
});

export default connect(null, mapDispatchToProps)(App);
