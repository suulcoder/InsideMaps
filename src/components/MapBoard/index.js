import React from 'react';
import { View, Image, Text } from "react-native";
import { connect } from 'react-redux';
import MapCard from '../MapCard';
import * as selectors from '../../reducers';

const MapBoard = ({maps}) => {

return (
  <View>
  {
    maps.length === 0 ? <Text>No hay mapas aún, intenta agregar uno nuevo, ¡Comencemos!</Text> :
  
    maps.forEach(map => 
      <MapCard 
        name={map.name} 
        id = {map._id}
        level={map.level}
      />)
  }
  </View>
);

}

export default connect(
  state => ({
    maps: selectors.getMaps(state),
  }),
  undefined
)(MapBoard);