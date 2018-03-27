import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUserLocation, fetchLocation } from '../actions/index';
import { Link } from 'react-router-dom';

import '../App.css';

import Input from '../components/Input'
import Button from '../components/Button'

class MainPage extends Component {

  componentDidMount() {
    if (navigator.geolocation) {
      this.props.fetchLocation(navigator.geolocation);
    }
  }

  handleChange = (e) => {
    this.props.getUserLocation(e.target.value);
  }

  startNewReport = () => { }

  viewReports = () => { }

  render() {
    const { browserLocation } = this.props;

    const location = browserLocation && browserLocation.latitude && browserLocation.longitude ? `${browserLocation.latitude} ${browserLocation.longitude}` : 'Loading location...';

    return (
      <div className="App">
        <Input
          inputValue={location}
          handleChange={this.handleChange}
        />
        <Button><Link to="/report">Report Incident</Link></Button>
        <Button><Link to="/data">View Reports</Link>

        </Button>
      </div>
    );
  }
}

MainPage.propTypes = {
  browserLocation: PropTypes.object.isRequired,
  userLocation: PropTypes.object.isRequired,
  fetchLocation: PropTypes.func.isRequired,
  getUserLocation: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
}

const mapStateToProps = storeState => ({
  userLocation: storeState.rootReducer.locationReducer.userInput,
  browserLocation: storeState.rootReducer.locationReducer.browserLocation,
})

const mapDispatchToProps = {
  getUserLocation,
  fetchLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
