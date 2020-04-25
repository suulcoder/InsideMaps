import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;

let styles = StyleSheet.create({
    signUp: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        borderWidth: 3,
        borderColor: '#FFFFFF',
        padding: 60,
        marginTop: 100,
        marginBottom: 120
    },
    inputShort: {
        width: 50,
        height: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        fontSize: 9,
        marginRight: 15,
        marginLeft: 15,
        padding: 10,
    },
    input: {
        minWidth: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        fontSize: 12,
        marginRight: 15,
        marginTop: 12,
        padding: 10
    },
    inputLarge: {
        minWidth: 410,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        fontSize: 12,
        marginRight: 15,
        marginTop: 12,
        padding: 10
    },
    password:{
        minWidth: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        fontSize: 12,
        marginRight: 15,
        marginTop: 12,
        padding: 10,
    },
    button:{
        backgroundColor: '#540A08',
        borderRadius: 50,
        borderWidth: 6,
        borderColor: '#540A08',
        width: 150,
        marginTop: 50
    },
    text: {
        color: "white",
        fontSize: 40,
        marginBottom: 60
    },
    subSection: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        padding: 5,
        flexWrap: 'wrap'
    },
    subSection2: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 12,
        flexWrap: 'wrap'
    },
    textSmall:{
        color: "white",
        fontSize: 15,
    },
    textVerySmall:{
        color: "white",
        fontSize: 11    ,
    },
    errorText:{
        color: "white",
        fontSize: 15,
    },
});

export default styles