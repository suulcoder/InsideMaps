import React from 'react';
import './styles.css';




const MapCard = ({name, level, id}) => {
  return (

    <div id={id} className='card'>
      <Image source={require('../../../public/img/indoor-map.jpg')}/>
      <div>Name : {name}</div>
      <div>Level : {level}</div>
      
    </div>

  );
}

export default MapCard;