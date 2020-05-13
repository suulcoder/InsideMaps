import React, {useState, useEffect} from "react";
import styles from './styles'

import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import * as actions from '../../actions/map';
import { select } from "redux-saga/effects";
import { v4 as uuidv4 } from 'uuid';

const MapForm = ({isAuthenticated, onCreate}) => {
  
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  const [id_place, changeId] = useState('');
  const [level, changeLevel] = useState('');
  const [map_filename, changeFile] = useState('');
  const [qr_code, changeQr] = useState('');

  return (
    <View style={styles.container}>
      <Text>Create Map</Text>
      <TextInput
        style={styles.inputTxt}
        className="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => changeName(e.target.value)}
      />
      {
        name.length === 0 ? <Text style={styles.text}>Write a valid name</Text> : <Text></Text>
      }
      <TextInput
        style={styles.inputTxt}
        className="id"
        type="text"
        placeholder="Site id"
        value={id_place}
        onChange={e => changeId(e.target.value)}
      />
      {
        id_place.length === 0 ? <Text style={styles.text}>Write a valid id</Text> : <Text></Text>
      }
      <TextInput
        style={styles.inputTxt}
        className="description"
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => changeDescription(e.target.value)}
      />
      {
        description.length === 0 ? <Text style={styles.text}>Write a valid description</Text> : <Text></Text>
      }
      <TextInput
        style={styles.inputTxt}
        className="level"
        type="text"
        placeholder="Level"
        value={level}
        onChange={e => changeLevel(e.target.value)}
      />
      {
        level.length === 0 ? <Text style={styles.text}>Write a valid level</Text> : <Text></Text>
      }
      <TextInput
        style={styles.inputTxt}
        className="fielName"
        type="text"
        placeholder="File Name"
        value={map_filename}
        onChange={e => changeFile(e.target.value)}
      />
      {
        map_filename.length === 0 ? <Text style={styles.text}>Write a valid file name</Text> : <Text></Text>
      }
      <TextInput
        style={styles.inputTxt}
        className="qrCode"
        type="text"
        placeholder="QR Code in here "
        value={qr_code} 
        onChange={e => changeQr(e.target.value)}
      />
      {
        qr_code.length === 0 ? <Text style={styles.text}>Write a valid qr code</Text> : <Text></Text>
      }
      <View style={styles.button}>
        <Button  style={styles.button} title={'Create'} type="submit" onPress={
          
          () => {onCreate(name, description, id_place, level, map_filename,qr_code);
                changeName('');
                changeDescription('');
                changeFile('');
                changeId('');
                changeLevel('');
                changeQr('');
          }
        } />
      </View>
    </View>

  );
};



export default connect(
  state => ({
    isAuthenticated: selectors.getIsAuthenticating(state),
    error: selectors.getCreateError(state,)
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
      console.log("Esti es se va: ", map);
      dispatch(actions.startCreatingMap(map));
    }
  }),
)(MapForm);
//nombre, descripcion, id del lugar, nivel, nombre del archivo, codigoqr