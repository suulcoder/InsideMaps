import React, {useState} from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button, Text, Switch } from "react-native";
import styles from './styles'

const SignUp = ({onSubmit}) => {
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