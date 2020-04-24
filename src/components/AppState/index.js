import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Header from "../Header";

const AppState = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../../../public/img/image.png')} style={styles.image}>
      <Header></Header>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default AppState