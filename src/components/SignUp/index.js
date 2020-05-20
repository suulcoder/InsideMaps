import { connect } from 'react-redux';
import { getError, getIsSigning } from '../../reducers'
import { validateEmail } from  '../../modules/validate'
import Switch from "react-switch";
import * as actions from '../../actions/auth'
import React, {useState, Fragment} from 'react';
import Spinner from '../spinner';
import './styles.css';

const SignUp = ({Message, onSubmit, signInStatus}) => {
    const [user,changeUser] = useState('')
    const [password,changePassword] = useState('')
    const [passwordConfirm,changePasswordComfirm] = useState('')
    const [email,changeEmail] = useState('')
    const [name,changeName] = useState('')
    const [lastname,changeLastname] = useState('')
    const [age,changeAge] = useState('0')
    const [sex,changesex] = useState(true)
    const toggleSwitch = (previousState) => changesex(!previousState);
    
    return (
        <Fragment>
        <div>
            <div className='container2'></div>
            <div className='signUp'>
                <div className='text'>START NOW </div>
                <input
                    className='inputLarge'
                    className="userSignUp"
                    type="text"
                    placeholder="username*"
                    value={user}
                    onChange={e => changeUser(e.target.value)}
                />
                <input
                    className='inputLarge'
                    className="email"
                    type="email"
                    placeholder="email*"
                    value={email}   
                    onChange={e=>changeEmail(e.target.value)}
                />
                <div className='subSection'>
                    <input
                        className='input'
                        placeholder="Name*"
                        value={name}
                        onChange={e=>changeName(e.target.value)}
                    />
                    <input
                        className='input'
                        value={lastname}
                        placeholder="Lastname*"
                        onChange={e=>changeLastname(e.target.value)}
                    />
                </div>
                <div className='subSection'>
                    <input
                        className='password'
                        className="passwordSignUp"
                        type="password"
                        secureTextEntry={true}
                        placeholder="password*"
                        value={password}
                        onChange={e=>changePassword(e.target.value)}
                    />
                    <input
                        className='password'
                        className="passwordConfirm"
                        type="password"
                        secureTextEntry={true}
                        placeholder="password confirmation*"
                        value={passwordConfirm}
                        onChange={e=>changePasswordComfirm(e.target.value)}
                    />
                </div>
                <div className='subSection2'>
                    <div className='subSection3'>
                        <div className='textSmall'>AGE: </div>
                        <input
                            className='inputShort'
                            placeholder="AGE"
                            value={age}
                            onChange={e=>changeAge(e.target.value)}
                        />
                    </div>
                    <div className='subSection3'>
                        <div className='textSmall'>SEX:  </div>
                        <div className='subSection3'>
                            <div className='textVerySmall'>M  </div>
                            <Switch
                                onChange={e=>toggleSwitch}
                                value={sex}
                            />
                            <div className='textVerySmall'>   F</div>
                        </div>
                    </div>
                </div>
                <div className='errorText'>{Message}</div>
                {
                    signInStatus ? <Spinner/> :
                    <div className='button'>
                        <button type="submit" color='#2580f5' 
                            className='button' onClick={
                            () => onSubmit(name,lastname,user,email,password,age,sex, passwordConfirm)
                        }>{'SIGN UP'}</button>
                    </div>
                }
            </div>
            <div className='container3'></div>
        </div>
        </Fragment>
    )
}

export default connect(
    state => ({
        Message: (getIsSigning(state)!==null)?
            ((getIsSigning(state))?
                ('LOADING...'):
                (getError(state))):
            (undefined) ,
        signInStatus: getIsSigning(state)
    }),
    dispatch => ({
        onSubmit(name,lastname,user,email,password,age,sex, passwordConfirm){
            if(user && password && lastname && name && email && age){
                if(password===passwordConfirm){
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