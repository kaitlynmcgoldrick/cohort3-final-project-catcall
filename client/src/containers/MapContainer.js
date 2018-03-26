import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../components/Map';

import { updatePinLocation } from '../actions/index';
import { bindActionCreators } from 'redux';

class MapContainer extends Component {
    render() {
      return (
        <div>
          <Map google={this.props.google} updatePinLocation={updatePinLocation}/>
        </div>
      );
    }
  }

const mapStateToProps = (state) => {
    return {
        pinLocation: state.pinLocation
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updatePinLocation: updatePinLocation }, dispatch)
}
// const mapDispatchToProps = {
// };

// const MapWrapper = GoogleApiWrapper({
//     apiKey: 'AIzaSyA-gMsKVvKdp63xHF1AGfQ-r65vQV4Jsh4',
//   })(MapContainer);

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);


