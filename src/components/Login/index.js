import  Spinner  from '../spinner';
import { connect } from 'react-redux';
import { getError, getIsLogging } from '../../reducers'
import { validateEmail } from  '../../modules/validate'
import * as actions from '../../actions/auth'
import React, {useState} from 'react';
import './styles.css';


const Login = ({Message ,onSubmit, loginSatus}) => {
    const [email,changeEmail] = useState('')
    const [password,changePassword] = useState('')
    return (
        <div className='section'>
            <div className='login'>
                <input
                className='user'
                className="user"
                type="text"
                placeholder="email"
                value={email}
                value={email}
                onChange={e => changeEmail(e.target.value)}
                />
                <input
                    className='password'
                    className="password"
                    type="password"
                    secureTextEntry={true}
                    placeholder="password"
                    value={password}
                    onChange={e=>changePassword(e.target.value)}
                />
                   { loginSatus ? <Spinner />:
                    <div className='button'>
                        <button className="login_button" color='#2580f5' type="submit" onClick={
                            () => onSubmit(email,password)
                        }>{'LOGIN'}</button>
                    </div>
                }
            </div>
            <div className='errorText'>{Message}</div>
            <div className='sectionText'>
                <div className='text'>Scroll Down ↓</div>
            </div>
        </div>
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

