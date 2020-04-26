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
        marginBottom: 120
    },
    inputShort: {
        width: 70,
        height: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        fontSize: 9,
        marginRight: 15,
        marginLeft: 15,
        padding: 10,
    },
    input: {
        width: 200,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        fontSize: 12,
        marginRight: 15,
        marginTop: 12,
        padding: 10
    },
    inputLarge: {
        width: 420,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        fontSize: 12,
        marginRight: 15,
        marginTop: 12,
        padding: 10
    },
    password:{
        width: 200,
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
    subSection3: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        padding: 5,
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
if(width<900){
    styles = StyleSheet.create({
        signUp: {
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: '#02121B',
            borderColor: '#FFFFFF',
            padding: 50,
            width: width
        },
        inputShort: {
            width: 70,
            height: 30,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            fontSize: 9,
            marginRight: 15,
            marginLeft: 15,
            padding: 10,
        },
        input: {
            width: 250,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            fontSize: 12,
            marginRight: 15,
            marginTop: 7,
            padding: 15
        },
        inputLarge: {
            width: 250,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            fontSize: 12,
            marginRight: 15,
            marginTop: 7,
            padding: 15
        },
        password:{
            width: 250,
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            fontSize: 12,
            marginRight: 15,
            marginTop: 7,
            padding: 15,
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
            fontSize: 35,
            marginBottom: 60,
            marginTop: 40
        },
        subSection: {
            alignItems: "baseline",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: 'wrap'
        },
        subSection2: {
            alignItems: "baseline",
            flexDirection: "row",
            justifyContent: 'space-between',
            padding: 5,
            marginTop: 12,
            flexWrap: 'wrap'
        },
        subSection3: {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            padding: 5,
            flexWrap: 'wrap'
        },
        textSmall:{
            color: "white",
            fontSize: 10,
        },
        textVerySmall:{
            color: "white",
            fontSize: 7    ,
        },
        errorText:{
            color: "red",
            fontSize: 15,
        },
        container2: {
            backgroundColor: '#02121B',
            height: 2,
            marginBottom: 1,
        },
        container3: {
            backgroundColor: '#02121B',
            height: 2,
            marginTop: 1,
            marginBottom: 10
        },
    });
}

export default styles