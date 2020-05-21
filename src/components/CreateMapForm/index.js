import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as actions from '../../actions/map';
import * as selectors from '../../reducers';
import React, {useState} from "react";
import './styles.css';
import Header from '../Header';
import {URL} from '../../configuration'


const MapForm = ({onSubmit, onCreate}) => {
  
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [id_place, changeId] = useState('');
  const [level, changeLevel] = useState('');
  const [map_filename, changeFile] = useState('');
  const [qr_code, changeQr] = useState('');

  //idplace de la vista
  //mpa_file name  eliminarlo
  //qr -> geneardor de qr

  return (
    <div className='container'>
      <Header/>
      <button className="login_button" color='#2580f5' type="submit" onClick={onSubmit
                        }>{'GO BACK'}</button>
      <div>Create Map</div>
      <input
        className='inputTxt'
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => changeName(e.target.value)}
      />
      {
        name.length === 0 ? <div className='text'>Write a valid name</div> : <div></div>
      }
      <input
        className='inputTxt'
        type="text"
        placeholder="Site id"
        value={id_place}
        onChange={e => changeId(e.target.value)}
      />
      {
        id_place.length === 0 ? <div className='text'>Write a valid id</div> : <div></div>
      }
      <input
        className='inputTxt'
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => changeDescription(e.target.value)}
      />
      {
        description.length === 0 ? <div className='text'>Write a valid description</div> : <div></div>
      }
      <input
        className='inputTxt'
        type="text"
        placeholder="Level"
        value={level}
        onChange={e => changeLevel(e.target.value)}
      />
      {
        level.length === 0 ? <div className='text'>Write a valid level</div> : <div></div>
      }
      <input
        className='inputTxt'
        type="text"
        placeholder="File Name"
        value={map_filename}
        onChange={e => changeFile(e.target.value)}
      />
      {
        map_filename.length === 0 ? <div className='div'>Write a valid file name</div> : <div></div>
      }
      <input
        className='inputTxt'
        type="text"
        placeholder="QR Code in here "
        value={qr_code} 
        onChange={e => changeQr(e.target.value)}
      />
      {
        qr_code.length === 0 ? <div className='text'>Write a valid qr code</div> : <div></div>
      }
      <div className='button'>
        <button  className='button' title={'Create'} type="submit" onClick={
          
          () => {onCreate(name, description, id_place, level, map_filename,qr_code);
                changeName('');
                changeDescription('');
                changeFile('');
                changeId('');
                changeLevel('');
                changeQr('');
          }
        } />
      </div>
    </div>

  );
};



export default connect(
  state => ({
    isLogged: selectors.getIsAuthenticating(state)!=null,
  }),
  dispatch => ({
    onCreate(name, description, id_place, level, map_filename,qr_code) {
      const _id = uuidv4();
      const map = {
        _id,
        name,
        description, 
        id_place, 
        level, 
        year:10,
        map_filename, 
        qr_code
      };
      dispatch(actions.startCreatingMap(map));
    },
    onSubmit(){
      window.location.href = URL
    }
  }),
  (stateToProps,disptachToProps) => {
    if(!stateToProps.isLogged){
        window.location.href = URL+'login/'
    }
    return ({...disptachToProps,...stateToProps})
  }
)(MapForm);
//nombre, descripcion, id del lugar, nivel, nombre del archivo, codigoqr