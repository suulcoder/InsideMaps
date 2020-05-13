import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;

let styles = StyleSheet.create({
    container: {
        display: 'flex',
        direction: 'row',
        backgroundColor: 'white',
        textAlign: 'center',
        padding: '50px',
        borderRadius: '5px'
    },

    inputTxt: {
        alignItems: "baseline",
        flexDirection: "row",
        justifyContent: "center",
        padding: 5,
        flexWrap: 'wrap',
        backgroundColor: 'white',
        marginTop: '6px',
        borderRadius: '5px',
        borderWidth: 1,
        borderColor: '#BFBFBF'
    },
  
    button:{
        backgroundColor: '#white',
        borderRadius: 15,
        boxShadow: '10px #000000',
        marginTop: '20px'        


    },

    card: {
     borderRadius:'10px',
     borderWidth:'1px',
     borderColor: 'gray',
     width: '200px',
     margin: '10px'

    },

    text:{
        color: 'gray',
        fontSize: 15,
    },
});
if(typeof document === 'undefined' || width<900){
    styles = StyleSheet.create({
        login: {
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 5,
            marginTop: 150,
            flexWrap: 'wrap'
        },
        user: {
            minWidth: 250,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            fontSize: 10,
            marginRight: 15,
            marginTop: 10,
            padding: 10
        },
        password:{
            minWidth: 250,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            fontSize: 10,
            marginRight: 15,
            marginTop: 10,
            marginBottom:50,
            padding: 10,
        },
        button:{
            backgroundColor: '#2580f5',
            borderColor: '#540A08',
            borderRadius: 50,
            borderWidth: 6,
            width: 150,
            marginTop: 35,
            marginBottom: 20
        },
        errorText:{
            color: "red",
            fontSize: 12,
        },
        text:{
            color: 'white',
            fontSize: 12,
            marginTop: 15,
            fontWeight: "bold"
        },
        sectionText:{
            marginTop: 50,
            alignItems: "center"
        },
        section:{
            flexDirection: "column",
            alignItems:"center"
        }
})}

export default styles