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
        marginTop: 120,
        marginBottom: 120
    },
    input: {
        minWidth: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        fontSize: 12,
        marginRight: 15,
        marginTop: 15,
        padding: 10
    },
    inputLarge: {
        minWidth: 410,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        fontSize: 12,
        marginRight: 15,
        marginTop: 15,
        padding: 10
    },
    password:{
        minWidth: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        fontSize: 12,
        marginRight: 15,
        marginTop: 15,
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
        alignItems: "baseline",
        flexDirection: "row",
        justifyContent: "center",
        padding: 5,
        flexWrap: 'wrap'
    },
});

export default styles