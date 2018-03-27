import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../components/Map';

import { updatePinLocation } from '../actions/index';
import { bindActionCreators } from 'redux';

  class MapContainer extends Component {
    render() {
      const { updatePinLocation, pinLocation } = this.props;
      return (
        <div>
          <Map
            google={this.props.google}
            updatePinLocation={updatePinLocation}
            pinLocation={pinLocation} />
        </div>
      );
    }
  }

const mapStateToProps = (state) => ({
  pinLocation: state.rootReducer.pinLocation
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updatePinLocation: updatePinLocation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);


