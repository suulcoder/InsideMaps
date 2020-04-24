import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";
import Login from "../Login";

const width = Dimensions.get('window').width;
const Header = () => (
    <div>
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../public/logo/LOGO.png')} ></Image>
            <Login></Login>
        </View>
    </div>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 15,
    width: width,
    backgroundColor: '02121B',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 65,
    paddingRight: 20,
    paddingLeft: 20
  },
  logo: {
      width: 85,
      height: 85,
  }
});

export default Header