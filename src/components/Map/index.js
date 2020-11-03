import React, { Component } from 'react';
import { 
  withGoogleMap, 
  GoogleMap, 
  Marker } from 'react-google-maps';

class Map extends Component {   
  
  render() {
    const GoogleMapExample = withGoogleMap(props => {
      return (<GoogleMap
        defaultCenter={ { lat: props.lat, lng: props.long } }
        defaultZoom={ props.zoom }
      >
        <Marker
          position={{ lat: props.lat, lng: props.long }}
        />
      </GoogleMap>)
   });
   
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ 
            height: this.props.STATIC_VIEWPORT.height,
             width: this.props.STATIC_VIEWPORT.width, }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          {...this.props.STATIC_VIEWPORT}
        />
      </div>
   );   }
};

export default Map;