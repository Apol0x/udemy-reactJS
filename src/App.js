import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import ForeCastExtended from './components/ForeCastExtend.js';
import LocationListContainer from './containers/LocationListContainer.js';

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
            <LocationListContainer cities={cities}/>
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
