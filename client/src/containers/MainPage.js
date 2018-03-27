import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserLocation, fetchLocation } from '../actions/index';
import { Link } from 'react-router-dom';

import '../App.css';

import PageTitle from '../components/PageTitle';
import Input from '../components/Input'
import Button from '../components/Button'

import MapContainer from './MapContainer'

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
        <PageTitle>CatCall.io</PageTitle>
        <Input
          inputValue={location}
          handleChange={this.handleChange}
        />
        <Button><Link to="/report">Report Incident</Link></Button>
        <Button><Link to="/data">View Reports</Link></Button>
        <MapContainer />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   userLocation: state.userInput,
//   browserLocation: state.browserLocation,
// })
const mapStateToProps = state => ({
  userLocation: state.rootReducer.location.userInput,
  browserLocation: state.rootReducer.location.browserLocation,
})

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     { getUserLocation: getUserLocation,
//       fetchLocation: fetchLocation
//     }, dispatch)
// }

const mapDispatchToProps = {
  getUserLocation,
  fetchLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
