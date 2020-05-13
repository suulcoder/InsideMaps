import React from "react";
import { ImageBackground, ScrollView, View, Text } from "react-native";
import Header from "../Header";
import styles from './styles'
import BodyContent from "../BodyContent";

const MyApp = () => (
    <ImageBackground source={require('../../../public/img/indoor.jpg')} style={styles.image} imageStyle={{opacity:0.45}}>
      <View style={styles.container2}>
            <Header></Header>
            <BodyContent></BodyContent>
      </View>
    </ImageBackground>
)

const AppState = ({isLogged}) => {
  if (typeof document != 'undefined') {
    // I'm on the web!
    return (
      <View style={styles.container} >
        <MyApp isLogged={isLogged}></MyApp>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={styles.container} contentContainerStyle={{alignItems:"center", flexGrow: 1}}>
      <MyApp ></MyApp>
    </ScrollView>
    </View>
  )
}; 

export default AppState