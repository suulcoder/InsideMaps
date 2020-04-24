import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";
import Login from "../Login";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";

const width = Dimensions.get('window').width;
const Header = () => (
    <View>
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../public/logo/LOGO.png')} ></Image>
            <Login></Login>
        </View>
        <View style={styles.container2}></View>
    </View>
);

let styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: 'stretch',
    backgroundColor: '#02121B',
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    width :width
  },
  container2: {
    backgroundColor: '#02121B',
    height: 2,
    marginTop: 1    
  },
  logo: {
    height: 85,
    width: 85,
  }
});
if(width<800){
    styles = StyleSheet.create({
        container: {
          alignItems: "center",
          alignSelf: 'stretch',
          backgroundColor: '#02121B',
          flexDirection: "column",
          justifyContent: 'space-between',
          paddingBottom: 35,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 100,
          width: width,
        },
        container2: {
          backgroundColor: '#02121B',
          height: 2,
          marginTop: 1    
        },
        logo: {
          height: 85,
          width: 85,
        }
      });
}

export default Header