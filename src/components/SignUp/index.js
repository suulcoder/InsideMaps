import React, {useState} from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button, Text, Switch } from "react-native";
import styles from './styles'
import { getError, getIsAuthenticating } from '../../reducers'
import * as actions from '../../actions/auth'

const SignUp = ({Message, onSubmit}) => {
    const [user,changeUser] = useState('')
    const [password,changePassword] = useState('')
    const [passwordConfirm,changePasswordComfirm] = useState('')
    const [email,changeEmail] = useState('')
    const [name,changeName] = useState('')
    const [lastname,changeLastname] = useState('')
    const [age,changeAge] = useState('')
    const [sex,changesex] = useState(true)
    const toggleSwitch = () => changesex(previousState => !previousState);
    
    return (
        <View style={styles.signUp}>
            <Text style={styles.text}>START NOW</Text>
            <TextInput
                style={styles.inputLarge}
                className="userSignUp"
                type="text"
                placeholder="username"
                value={user}
                onChange={e => changeUser(e.target.value)}
            />
            <TextInput
                style={styles.inputLarge}
                className="email"
                type="email"
                placeholder="email"
                value={email}
                onChange={e=>changeEmail(e.target.value)}
            />
            <View style={styles.subSection}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChange={e=>changeName(e.target.value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Lastname"
                    value={lastname}
                    onChange={e=>changeLastname(e.target.value)}
                />
            </View>
            <View style={styles.subSection}>
                <TextInput
                    style={styles.password}
                    className="passwordSignUp"
                    type="password"
                    secureTextEntry={true}
                    placeholder="password"
                    value={password}
                    onChange={e=>changePassword(e.target.value)}
                />
                <TextInput
                    style={styles.password}
                    className="passwordConfirm"
                    type="password"
                    secureTextEntry={true}
                    placeholder="password confirmation"
                    value={passwordConfirm}
                    onChange={e=>changePasswordComfirm(e.target.value)}
                />
            </View>
            <View style={styles.subSection2}>
                <View style={styles.subSection}>
                    <Text style={styles.textSmall}>AGE: </Text>
                    <TextInput
                        style={styles.inputShort}
                        placeholder="AGE"
                        value={age}
                        onChange={e=>changeAge(e.target.value)}
                    />
                </View>
                <View style={styles.subSection}>
                    <Text style={styles.textSmall}>SEX:  </Text>
                    <View style={styles.subSection}>
                        <Text style={styles.textVerySmall}>M  </Text>
                        <Switch
                            trackColor={{ false: "#540A08", true: "#540A08" }}
                            onValueChange={toggleSwitch}
                            thumbColor={sex ? "#f5dd4b" : "#f4f3f4"}
                            value={sex}
                        />
                        <Text style={styles.textVerySmall}>   F</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.errorText}>{Message}</Text>
            <View style={styles.button}>
                <Button type="submit" color='#540A08' title='SIGN UP' 
                    style={styles.button} onPress={
                    () => onSubmit(name,lastname,user,email,password,age,sex, passwordConfirm)
                }/>
            </View>
        </View>
    )
}

export default connect(
    state => ({
        Message: (getIsAuthenticating(state).signup)?('LOADING...'):(getError(state)) 
    }),
    dispatch => ({
        onSubmit(name,lastname,user,email,password,age,sex, passwordConfirm){
            if(user && password && lastname && name && email && age){
                if(password==passwordConfirm){
                    dispatch(actions.startSignUp(name,lastname,user,email,password,age,sex));
                }
                else{
                    dispatch(actions.failLogin('PASSWORDS MUST MATCH'));
                }
            }    
            else if(!user){
                dispatch(actions.failLogin('USER FIELD MUST NOT BE EMPTY'));
            }
            else if(!password){
                dispatch(actions.failLogin('PASSWORD FIELD MUST NOT BE EMPTY'));
            }
            else if(!name){
                dispatch(actions.failLogin('NAME FIELD MUST NOT BE EMPTY'));
            }
            else if(!lastname){
                dispatch(actions.failLogin('LASTNAME FIELD MUST NOT BE EMPTY'));
            }
            else if(!email){
                dispatch(actions.failLogin('EMAIL FIELD MUST NOT BE EMPTY'));
            }
            else if(!age){
                dispatch(actions.failLogin('AGE FIELD MUST NOT BE EMPTY'));
            }
        }
    })
)(SignUp)