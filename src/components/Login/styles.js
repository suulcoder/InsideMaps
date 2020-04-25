import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;

let styles = StyleSheet.create({
    login: {
        alignItems: "baseline",
        flexDirection: "row",
        justifyContent: "center",
        padding: 5,
        flexWrap: 'wrap'
    },
    user: {
        minWidth: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        fontSize: 12,
        marginRight: 15,
        marginTop: 5,
        padding: 10
    },
    password:{
        minWidth: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        fontSize: 12,
        marginRight: 15,
        marginTop: 5,
        padding: 10,
    },
    button:{
        backgroundColor: '#540A08',
        borderRadius: 50,
        borderWidth: 6,
        borderColor: '#540A08',
        width: 150
    },
    errorText:{
        borderColor: "red",
        color: "white",
        fontSize: 15,
    },
    section:{
        flexDirection: "column",
        alignItems:"center"
    }
});
if(width<800){
    styles = StyleSheet.create({
        login: {
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 5,
            marginTop: 70,
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
            backgroundColor: '#540A08',
            borderColor: '#540A08',
            borderRadius: 50,
            borderWidth: 6,
            width: 150,
            marginTop: 35,
            marginBottom: 20
        },
        errorText:{
            color: "red",
            fontSize: 15,
        },
})}

export default styles