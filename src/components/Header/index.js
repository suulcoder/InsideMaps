import React from "react";
import { View, Image } from "react-native";
import Login from "../Login";
import styles from './styles'

const Header = () => (
    <View>
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../public/logo/LOGO.png')} ></Image>
            <Login></Login>
        </View>
        <View style={styles.container2}></View>
    </View>
);


export default Header