import React from 'react';
import { View, Image, Text } from "react-native";
import { connect } from 'react-redux';
import MapCard from '../MapCard';
import * as selectors from '../../reducers';
import styles from '../MapBoard/styles';

const MapBoard = ({maps}) => {

return (
  <View style={styles.container}>
  <Text>Mis mapitas: </Text>
  {
    maps.length === 0 ? <Text>No hay mapas aún, intenta agregar uno nuevo, ¡Comencemos!</Text> :
  
    maps.map(map => 
      <MapCard 
        key={map._id}
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