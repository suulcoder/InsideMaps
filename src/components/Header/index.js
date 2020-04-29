import React from "react";
import { View, Image, Button } from "react-native";
import Login from "../Login";
import styles from './styles';
import { connect } from 'react-redux';
import { getAuthToken } from '../../reducers';
import { logout } from '../../actions/auth';

const Header = ({isLogged, onSubmit}) => (
    <View>
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../public/logo/LOGO.png')} ></Image>
            {
                (isLogged)?(
                    <View style={styles.button}>
                        <Button className="login_button" color='#540A08'  title={'LOG OUT'} type="submit" onPress={
                            () => onSubmit()
                        }/>
                    </View>
                ):(
                    <Login></Login>
                )
            }
        </View>
        <View style={styles.container2}></View>
    </View>
);

export default connect(
    state => {
      console.log(state)
      return({
        isLogged: getAuthToken(state)!=null
      })
    },
    dispatch => ({
        onSubmit(){
            dispatch(logout())
        }
    })
  )(Header)