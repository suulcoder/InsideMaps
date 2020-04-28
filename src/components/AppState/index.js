import React from "react";
import { ImageBackground, ScrollView, View, Text } from "react-native";
import Header from "../Header";
import styles from './styles'
import BodyContent from "../BodyContent";
import { connect } from 'react-redux'
import { getAuthToken } from '../../reducers/index'

const MyApp = ({isLogged}) => (
  <View style={styles.body}>
    <ImageBackground source={require('../../../public/img/background.jpg')} style={styles.image} imageStyle={{opacity:0.45}}>
      {
        (isLogged)?(
          <View>
            <Header></Header>
            <Text style={styles.text}> YOU ARE LOGGED </Text>
          </View>
        ):(
          <View style={styles.container2}>
            <Header></Header>
            <BodyContent></BodyContent>
          </View>
        )
      }
      
    </ImageBackground>
  </View>
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
    <ScrollView style={styles.container} contentContainerStyle={{alignItems:"center"}}>
      <MyApp isLogged={isLogged}></MyApp>
    </ScrollView>
  )
}; 

export default connect(
  state => {
    console.log(state)
    return({
      isLogged: getAuthToken(state)!=null
    })
  },
  undefined
)(AppState)