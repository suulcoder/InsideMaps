import React from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import Header from "../Header";
import styles from './styles'
import BodyContent from "../BodyContent";
import { connect } from 'react-redux'
import { getAuthToken } from '../../reducers/index'

const MyApp = ({isLogged}) => (
  <View>
    <ImageBackground source={require('../../../public/img/image.png')} style={styles.image}>
      {
        (isLogged)?(
          <View></View>
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