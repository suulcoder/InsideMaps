import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as actions from '../../actions/map';



const MapCard = ({name, level, id, onDelete}) => {
  const myId = id;
  return (

    <div id={id} className='card'>
      <div>Name : {name}</div>
      <div>Level : {level}</div>
      <button onClick={onDelete(myId)}>&#215;</button>
    </div>

  );
}

export default connect(
  (state,{name, level, id}) => ({
  }),
  dispatch =>({
  onDelete(id){
    dispatch(actions.startDeletingMap(id));
  },
}),
)(MapCard);

