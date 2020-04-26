import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;  // when its in phone, its bigger side will be de heigh
let height = Dimensions.get('window').height;  

let styles = StyleSheet.create({
    container: {
      alignItems: "center",
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
  let color = '#02121B'
  let scale = 1
  if (typeof document != 'undefined') {
    height = Dimensions.get('window').width;  // when its in phone, its bigger side will be de heigh
    color = 'transparent'
    scale = 2
  } 
  if(width<900){
      styles = StyleSheet.create({
          container: {
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: '#02121B',
            borderColor: '#FFFFFF',
            padding: 50,
            width: width
          },
          container2: {
            backgroundColor: color,
            height: 2,
            marginTop: 1    
          },
          logo: {
            marginTop: 100/scale,
            height: 85,
            width: 85,
          }
        });
  }
  
  export default styles