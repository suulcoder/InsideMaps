import { connect } from 'react-redux';
import { getAuthToken } from '../../reducers/index';
import Header from "../Header";
import MapBoard from '../MapBoard';
import MapForm from '../createMapForm';
import React from "react";
import './styles.css';
import {URL} from '../../configuration'

const Home = ({onSubmit}) => (
    <div className='container'>
          {console.log(onSubmit)}
            <Header/>
            <div className='container'>
            <MapBoard />
            <button className="login_button" color='#2580f5' type="submit" onClick={onSubmit
                        }>{'CREATE A NEW MAP'}</button>
            </div>
    </div>
);


export default connect(
    state => ({
        isLogged: getAuthToken(state)!=null
      }),
    dispatch=>({
      onSubmit(){
        window.location.href = URL+'map/create/'
      }
    }),
    (stateToProps,disptachToProps) => {
      if(!stateToProps.isLogged){
          window.location.href = URL+'login/'
      }
      return ({...disptachToProps})
    }
  )(Home)