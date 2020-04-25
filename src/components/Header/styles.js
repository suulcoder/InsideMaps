import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;  // when its in phone, its bigger side will be de heigh
let height = Dimensions.get('window').height;  

let styles = StyleSheet.create({
    container: {
      alignItems: "center",
      alignSelf: 'stretch',
      flexDirection: "row",
      justifyContent: 'space-between',
      paddingBottom: 15,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 15,
      width :width
    },
    container2: {
      height: 4,
      marginTop: 2    
    },
    logo: {
      height: 85,
      width: 85,
    }
  });
  if (typeof document != 'undefined') {
    height = Dimensions.get('window').width;  // when its in phone, its bigger side will be de heigh
  } 
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
            width: height,
          },
          container2: {
            backgroundColor: '#02121B',
            height: 2,
            marginTop: 1    
          },
          logo: {
            marginTop: 20,
            height: 85,
            width: 85,
          }
        });
  }
  
  export default styles