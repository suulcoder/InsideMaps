import React from "react";
import { View, Image, Text } from "react-native";
import Login from "../Login";
import styles from './styles'
import SignUp from "../SignUp";

const BodyContent = () => (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>GET INDOORS LOCATION</Text>    
        </View>
        <SignUp></SignUp>
    </View>
);


export default BodyContent