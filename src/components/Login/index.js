import React, {useState} from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button, Text } from "react-native";
import styles from './styles'
import { getError, getIsLogging, getIsSigning } from '../../reducers'
import * as actions from '../../actions/auth'
import { validateEmail } from  '../../modules/validate'
import  Spinner  from '../spinner';

const Login = ({Message ,onSubmit, loginSatus}) => {
    const [email,changeEmail] = useState('')
    const [password,changePassword] = useState('')
    return (
        <View style={styles.section}>
            <View style={styles.login}>
                <TextInput
                style={styles.user}
                className="user"
                type="text"
                placeholder="email"
                value={email}
                value={email}
                keyboardType={'email-address'}    
                onChangeText={changeEmail}
                onChange={e => changeEmail(e.target.value)}
                />
                <TextInput
                    style={styles.password}
                    className="password"
                    type="password"
                    secureTextEntry={true}
                    placeholder="password"
                    value={password}
                    onChangeText={changePassword}
                    onChange={e=>changePassword(e.target.value)}
                />
                   { loginSatus ? <Spinner />:
                    <View style={styles.button}>
                        <Button className="login_button" color='#540A08'  title={'LOGIN'} type="submit" onPress={
                            () => onSubmit(email,password)
                        }/>
                    </View>
                }
            </View>
            <Text style={styles.errorText}>{Message}</Text>
            <View style={styles.sectionText}>
                <Text style={styles.text}>Scroll Down ↓</Text>
            </View>
        </View>
    )
}

export default connect(
    state => ({
        Message: (getIsLogging(state)!==null)?
            ((getIsLogging(state))?
                ('LOADING...'):
                (getError(state))):
            (undefined) ,
        loginSatus: getIsLogging(state)
    }),
    dispatch => ({
        onSubmit(email,password){
            if(email && password){
                if(validateEmail(email)){
                    dispatch(actions.startLogin(email,password))
                }
                else{
                    dispatch(actions.failLogin('WRITE A VALID EMAIL',0))
                }
                
            }    
            else if(!email){
                dispatch(actions.failLogin('EMAIL FIELD MUST NOT BE EMPTY',0))
            }
            else if(!password){
                dispatch(actions.failLogin('PASSWORD FIELD MUST NOT BE EMPTY',0))
            }
        }
    })
)(Login)

