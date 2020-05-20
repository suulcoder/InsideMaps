import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import MapCard from '../MapCard';
import React from 'react';
import './styles.css';


const MapBoard = ({maps}) => {

return (
  <div className='container'>
  <div>Mis mapitas: </div>
  {
    maps.length === 0 ? <div>No hay mapas aún, intenta agregar uno nuevo, ¡Comencemos!</div> :
  
    maps.map(map => 
      <MapCard 
        key={map._id}
        name={map.name} 
        id={map._id}
        level={map.level}
      />)
  }
  </div>
);

}

export default connect(
  state => ({
    maps: selectors.getMaps(state),
    
  }),
  undefined
)(MapBoard);