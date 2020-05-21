import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import * as actions from '../../actions/map';
import MapCard from '../MapCard';
import React, { useEffect } from 'react';
import './styles.css';


const MapBoard = ({maps, onLoad, isFetching}) => {
useEffect(onLoad, []);
return (
  <div className='container'>
  <div>Mis mapitas: </div>
  {isFetching && <h1>Cargando ... </h1>}
  {
    maps.length === 0 && !isFetching &&
    ( <h1>No hay mapas aún, intenta agregar uno nuevo, ¡Comencemos!</h1>)}

  {
     maps.length > 0 && !isFetching  &&(
  
    maps.map(element => 
      <MapCard 
        key={element._id}
        name={element.name} 
        id={element._id}
        level={element.level}
      />)
      )
  }
  </div>
);

}

export default connect(
  state => ({
    maps: selectors.getMaps(state),
    isFetching: selectors.getIsFetching(state),
    
  }),
  dispatch =>({
  onLoad(){
    dispatch(actions.startFetchingMaps());
  },
}),
)(MapBoard);