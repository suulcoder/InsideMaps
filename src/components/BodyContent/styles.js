import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;

let styles = StyleSheet.create({
    container: {
      alignItems: "baseline",
      alignSelf: 'stretch',
      flexDirection: "row",
      justifyContent: 'center',
      paddingRight: 150,
      paddingLeft: 150
    },
    text: {
        color: "white",
        fontSize: 110,
      },
    textContainer:  {
      marginTop: 90,  
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
      justifyContent: 'center',
      padding: 45,
      marginBottom:50
    },
    text: {
        color: "white",
        fontSize: 60,
      },
    textContainer:  {
        width: 300,
        marginTop:70,
        marginBottom: 70,
        marginRight: 50
    }
  });
}

export default styles