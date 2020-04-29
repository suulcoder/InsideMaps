import React, {useState, Fragment} from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button, Text, Switch } from "react-native";
import styles from './styles'
import { getError, getIsSigning } from '../../reducers'
import * as actions from '../../actions/auth'
import { validateEmail } from  '../../modules/validate'

const SignUp = ({Message, onSubmit}) => {
    const [user,changeUser] = useState('')
    const [password,changePassword] = useState('')
    const [passwordConfirm,changePasswordComfirm] = useState('')
    const [email,changeEmail] = useState('')
    const [name,changeName] = useState('')
    const [lastname,changeLastname] = useState('')
    const [age,changeAge] = useState(0)
    const [sex,changesex] = useState(true)
    const toggleSwitch = () => changesex(previousState => !previousState);
    
    return (
        <Fragment>
        <View>
            <View style={styles.container2}></View>
            <View style={styles.signUp}>
                <Text style={styles.text}>START NOW </Text>
                <TextInput
                    style={styles.inputLarge}
                    className="userSignUp"
                    type="text"
                    placeholder="username*"
                    value={user}
                    onChangeText={changeUser}
                    onChange={e => changeUser(e.target.value)}
                />
                <TextInput
                    style={styles.inputLarge}
                    className="email"
                    type="email"
                    placeholder="email*"
                    autoCompleteType='email'
                    value={email}
                    keyboardType={'email-address'}    
                    onChangeText={changeEmail}    
                    onChange={e=>changeEmail(e.target.value)}
                />
                <View style={styles.subSection}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name*"
                        value={name}
                        onChangeText={changeName}
                        onChange={e=>changeName(e.target.value)}
                    />
                    <TextInput
                        style={styles.input}
                        value={lastname}
                        placeholder="Lastname*"
                        onChangeText={changeLastname}
                        onChange={e=>changeLastname(e.target.value)}
                    />
                </View>
                <View style={styles.subSection}>
                    <TextInput
                        style={styles.password}
                        className="passwordSignUp"
                        type="password"
                        secureTextEntry={true}
                        placeholder="password*"
                        value={password}
                        onChangeText={changePassword}
                        onChange={e=>changePassword(e.target.value)}
                    />
                    <TextInput
                        style={styles.password}
                        className="passwordConfirm"
                        type="password"
                        secureTextEntry={true}
                        placeholder="password confirmation*"
                        value={passwordConfirm}
                        onChangeText={changePasswordComfirm}
                        onChange={e=>changePasswordComfirm(e.target.value)}
                    />
                </View>
                <View style={styles.subSection2}>
                    <View style={styles.subSection3}>
                        <Text style={styles.textSmall}>AGE: </Text>
                        <TextInput
                            style={styles.inputShort}
                            placeholder="AGE"
                            value={age}
                            keyboardType={'numeric'}
                            onChangeText={changeAge}
                            onChange={e=>changeAge(e.target.value)}
                        />
                    </View>
                    <View style={styles.subSection3}>
                        <Text style={styles.textSmall}>SEX:  </Text>
                        <View style={styles.subSection3}>
                            <Text style={styles.textVerySmall}>M  </Text>
                            <Switch
                                onValueChange={toggleSwitch}
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
            <View style={styles.container3}></View>
        </View>
        </Fragment>
    )
}

export default connect(
    state => ({
        Message: (getIsSigning(state)!==null)?
            ((getIsSigning(state))?
                ('LOADING...'):
                (getError(state))):
            (undefined) 
    }),
    dispatch => ({
        onSubmit(name,lastname,user,email,password,age,sex, passwordConfirm){
            if(user && password && lastname && name && email && age){
                if(password==passwordConfirm){
                    if(age>0 || !age){
                        if(validateEmail(email)){
                            dispatch(actions.startSignUp(name,lastname,user,email,password,age,(sex)?0:1));
                        }
                        else{
                            dispatch(actions.failLogin('WRITE A VALID EMAIL',1));
                        }
                    }
                    else{
                        dispatch(actions.failLogin('WRITE A VALID AGE',1));
                    }
                }
                else{
                    dispatch(actions.failLogin('PASSWORDS MUST MATCH',1));
                }
            }    
            else if(!user){
                dispatch(actions.failLogin('USER FIELD MUST NOT BE EMPTY',1));
            }
            else if(!password){
                dispatch(actions.failLogin('PASSWORD FIELD MUST NOT BE EMPTY',1));
            }
            else if(!name){
                dispatch(actions.failLogin('NAME FIELD MUST NOT BE EMPTY',1));
            }
            else if(!lastname){
                dispatch(actions.failLogin('LASTNAME FIELD MUST NOT BE EMPTY',1));
            }
            else if(!email){
                dispatch(actions.failLogin('EMAIL FIELD MUST NOT BE EMPTY',1));
            }
            else if(!age){
                dispatch(actions.failLogin('AGE FIELD MUST NOT BE EMPTY',1));
            }
        }
    })
)(SignUp)