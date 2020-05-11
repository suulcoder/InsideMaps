import React, {useState, useEffect} from "react";
import styles from './styles'

import { View, Text, TextInput, Button } from 'react-native';
import { change } from "redux-form";

const MapForm = () => {
  
  const [name, changeName] = useState('Name');
  const [description, changeDescription] = useState('');
  const [id, changeId] = useState('');
  const [level, changeLevel] = useState('');
  const [file, changeFile] = useState('');
  const [qr, changeQr] = useState('');

  return (
    <View>
      <Text>Create Map</Text>
      <TextInput
        style={styles.name}
        className="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => changeName(e.target.value)}
      />
      {
        name.length === 0 ? <Text>Ingrese un nombre correcto</Text> : <Text></Text>
      }
      <TextInput
        style={styles.name}
        className="id"
        type="text"
        placeholder="Site id"
        value={id}
        onChange={e => changeId(e.target.value)}
      />
      <TextInput
        style={styles.name}
        className="description"
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => changeDescription(e.target.value)}
      />
      <TextInput
        style={styles.name}
        className="level"
        type="text"
        placeholder="Level"
        value={level}
        onChange={e => changeLevel(e.target.value)}
      />
      <TextInput
        style={styles.name}
        className="fielName"
        type="text"
        placeholder="File Name"
        value={file}
        onChange={e => changeFile(e.target.value)}
      />
      <TextInput
        style={styles.name}
        className="qrCode"
        type="text"
        placeholder="QR Code in here " changeIdchangeId
        value={qr} changeIdchangeIdchangeIdchchangeIdchangeIdangeId
        onChange={e => changeQr(e.target.value)}
      />

      <View style={styles.button}>
        <Button className="login_button" color='#540A08' title={'Create'} type="submit"  />
      </View>
    </View>

  );
};


export default MapForm;
//nombre, descripcion, id del lugar, nivel, nombre del archivo, codigoqr