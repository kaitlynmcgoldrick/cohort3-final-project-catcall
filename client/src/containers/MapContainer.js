import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { handleSubmitReport } from '../actions/index';
import { GoogleApiWrapper } from 'google-maps-react' 
import Map from '../components/Map'

class MapContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div>
          <h1> Google Maps API + React </h1> 
          <Map google={this.props.google} />
        </div>
      );
    }
  }

// const mapDispatchToProps = {
// };

// const MapWrapper = GoogleApiWrapper({
//     apiKey: 'AIzaSyA-gMsKVvKdp63xHF1AGfQ-r65vQV4Jsh4',
//   })(MapContainer);

// export default connect(null, mapDispatchToProps)(MapWrapper);

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA-gMsKVvKdp63xHF1AGfQ-r65vQV4Jsh4',
  })(MapContainer);
