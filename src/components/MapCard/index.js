import React from 'react';
import { View, Image, Text } from "react-native";
import styles from './styles'



const MapCard = ({name, level, id}) => {
  return (

    <View id={id} style={styles.card}>
      <Image source={require('../../../public/img/indoor-map.jpg')}/>
      <Text>Name : {name}</Text>
      <Text>Level : {level}</Text>
      
    </View>

  );
}

export default MapCard;