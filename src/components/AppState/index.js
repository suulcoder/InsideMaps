import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const AppState = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../../../public/img/Mirage.jpg')} style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default AppState