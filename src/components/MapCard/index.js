import React from 'react';
import { View, Image, Text } from "react-native";



const MapCard = ({name, level, id}) => {
  return (

    <View id={id}>
      <View>
        <Image/>
      </View>
      <View>
      <Text>{name}</Text>
      <Text>{level}</Text>
      </View>
    </View>

  );
}

export default MapCard;