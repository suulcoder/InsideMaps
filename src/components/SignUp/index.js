import React, {useState} from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button, Text } from "react-native";
import styles from './styles'

const SignUp = ({onSubmit}) => {
    const [user,changeUser] = useState('')
    const [password,changePassword] = useState('')
    const [passwordConfirm,changePasswordComfirm] = useState('')
    const [email,changeEmail] = useState('')
    const [name,changeName] = useState('')
    const [lastname,changeLastname] = useState('')
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
                    onChange={e=>changePassword(e.target.value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Lastname"
                    value={lastname}
                    onChange={e=>changePasswordComfirm(e.target.value)}
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
            <View style={styles.button}>
                <Button type="submit" color='#540A08' title='SIGN UP' 
                    style={styles.button} onPress={
                    () => onSubmit(user,email,password,passwordConfirm)
                }/>
            </View>
        </View>
    )
}

export default connect(
    undefined,
    dispatch=>({
        onSubmit(user,email,password,passwordConfirm){

        }
    })
)(SignUp)