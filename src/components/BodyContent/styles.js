import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;

let styles = StyleSheet.create({
    container: {
      overflowX: "hidden",
      marginTop: 50,
      alignItems: "flex-start",
      alignSelf: 'stretch',
      flexDirection: "row",
      justifyContent: 'center',
      paddingRight: 0,
      paddingLeft: 0,
      flexWrap: 'wrap',
      width: width
    },
    text: {
        color: "white",
        fontSize: 80,
        marginBottom: 150
      },
    textContainer:  {
      marginLeft:-80,
      marginTop: 90,  
      width: 530
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
        marginRight: 50
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