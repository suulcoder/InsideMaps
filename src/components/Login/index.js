import React, {useState} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const Login = ({onSubmit}) => {
    const [user,changeUser] = useState('')
    const [password,changePassword] = useState('')
    return (
        <View style={styles.login}>
            <TextInput
            style={styles.user}
            className="user"
            type="text"
            placeholder="username"
            value={user}
            onChange={e => changeUser(e.target.value)}
            />
            <TextInput
                style={styles.password}
                className="password"
                type="password"
                secureTextEntry={true}
                placeholder="password"
                value={password}
                onChange={e=>changePassword(e.target.value)}
            />
            <View style={styles.button}>
                <Button className="login_button" color='#540A08'  title={'LOGIN'} type="submit" onPress={
                    () => onSubmit(user,password)
                }/>
            </View>
            
        </View>
    )
}

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
        fontSize: 10,
        marginRight: 15,
        marginTop: 5,
        padding: 10
    },
    password:{
        minWidth: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        fontSize: 10,
        marginRight: 15,
        marginTop: 5,
        padding: 10,
    },
    login_button:{
        backgroundColor: '#540A08',
        borderColor: 'transparent',
        borderRadius: 20,
        color: '#FFFFFF',
        fontSize: 20,
    }
});
if(width<700){
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
            color: '#FFFFFF',
            fontSize: 20,
            width: 150,
            marginTop: 35,
            marginBottom: 20
        }
})}

export default connect(
    undefined,
    dispatch => ({
        onSubmit(user,password){
            
        }
    })
)(Login)