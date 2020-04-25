import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;

let styles = StyleSheet.create({
    container: {
      alignItems: "baseline",
      alignSelf: 'stretch',
      flexDirection: "row",
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: 150
    },
    text: {
        color: "white",
        fontSize: 120,
      },
    textContainer:  {
        width: 700
    }
  });
if(width<800){
styles = StyleSheet.create({
    container: {
      alignItems: "center",
      alignSelf: 'stretch',
      flexDirection: "row",
      flexWrap: 'wrap',
      padding: 45,
      marginBottom:50
    },
    text: {
        color: "white",
        fontSize: 60,
      },
    textContainer:  {
        width: 400,
        marginTop:70
    }
  });
}

export default styles