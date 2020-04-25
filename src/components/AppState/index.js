import React from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import Header from "../Header";
import styles from './styles'
import BodyContent from "../BodyContent";

let AppState = () => (
  <ScrollView style={styles.container}>
    <ImageBackground source={require('../../../public/img/image.png')} style={styles.image}>
      <Header></Header>
      <BodyContent></BodyContent>
    </ImageBackground>
  </ScrollView>
);

if (typeof document != 'undefined') {
  // I'm on the web!
  AppState = () => (
    <View style={styles.container}>
      <ImageBackground source={require('../../../public/img/image.png')} style={styles.image}>
        <Header></Header>
        <BodyContent></BodyContent>
      </ImageBackground>
    </View>
  );
}


export default AppState