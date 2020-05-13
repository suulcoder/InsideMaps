import React from "react";
import { View, Image, Text } from "react-native";
import Login from "../Login";
import styles from './styles'
import SignUp from "../SignUp";
import { connect } from 'react-redux';
import { getAuthToken } from '../../reducers/index';
import MapForm from '../createMapForm';
import MapBoard from '../MapBoard';


const BodyContent = ({isLogged}) => (
    <View style={styles.container}>
        {(isLogged)?(
            <View style={styles.container}>
            <MapBoard />
            <MapForm/>
            </View>
        ):(
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>GET INDOORS LOCATION</Text>    
                </View>
                <SignUp></SignUp>
            </View>
        )
        }
        
    </View>
);


export default connect(
    state => ({
        isLogged: getAuthToken(state)!=null
      }),
    undefined
  )(BodyContent)