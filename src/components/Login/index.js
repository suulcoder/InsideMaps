import React, {useState} from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button, Text } from "react-native";
import styles from './styles'
import { getError, getIsAuthenticating } from '../../reducers'
import * as actions from '../../actions/auth'

const Login = ({Message ,onSubmit}) => {
    const [user,changeUser] = useState('')
    const [password,changePassword] = useState('')
    return (
        <View style={styles.section}>
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
            <Text style={styles.errorText}>{Message}</Text>
        </View>
    )
}

export default connect(
    state => ({
        Message: (getIsAuthenticating(state).login!==null)?
            ((getIsAuthenticating(state).login)?
                ('LOADING...'):
                (getError(state))):
            (undefined) 
    }),
    dispatch => ({
        onSubmit(user,password){
            if(user && password){
                dispatch(actions.startLogin(user,password))
            }    
            else if(!user){
                dispatch(actions.failLogin('USER FIELD MUST NOT BE EMPTY',0))
            }
            else if(!password){
                dispatch(actions.failLogin('PASSWORD FIELD MUST NOT BE EMPTY',0))
            }
        }
    })
)(Login)