import {StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;  // when its in phone, its bigger side will be de heigh
const height = Dimensions.get('window').height;  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "black",
    },
    container2: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
    },
    image: {
      alignItems: 'center',
      flex: 1,
      height: height,
    },
    text: {
      marginTop: 100,
      color: "white",
      fontSize: 100,
      fontWeight: "bold",
      marginLeft: 150
    }
  });
  

export default styles