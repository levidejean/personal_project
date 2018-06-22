import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 32.7767,
      lng: -96.7970
    },
    zoom: 11
  };

  updateMap(myLat,myLng) {
    this.setState({
      center: {
        lat: myLat,
        lng: myLng
      },
      zoom: 11
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;
