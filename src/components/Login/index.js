import React, {useState} from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button } from "react-native";
import styles from './styles'

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

export default connect(
    undefined,
    dispatch => ({
        onSubmit(user,password){
            
        }
    })
)(Login)