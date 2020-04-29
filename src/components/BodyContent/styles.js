import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;

let styles = StyleSheet.create({
    container: {
      marginTop: 100,
      alignItems: "flex-start",
      alignSelf: 'stretch',
      flexDirection: "row",
      justifyContent: 'center',
      paddingRight: 150,
      paddingLeft: 150,
      flexWrap: 'wrap',
      width: width
    },
    text: {
        color: "white",
        fontSize: 110,
        marginBottom: 150
      },
    textContainer:  {
      marginTop: 90,  
      width: 700
    }
  });
if(typeof document === 'undefined' || width<900 ){
styles = StyleSheet.create({
    container: {
      alignItems: "center",
      alignSelf: 'stretch',
      flexDirection: "column",
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20,
    },
    text: {
        color: "white",
        fontSize: 55,
      },
    textContainer:  {
        width: 300,
        marginTop:80,
        marginBottom: 80,
        marginRight: 50
    }
  });
}

export default styles