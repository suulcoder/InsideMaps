import { connect } from "react-redux";
import * as selectors from "../../reducers";
import * as actions from '../../actions/map';
import MapCard from "../MapCard";
import React, { useEffect } from "react";
import "./styles.css";

import { MDBBtn, MDBIcon } from "mdbreact";

import {
  MDBRow,
} from "mdbreact";

import { Link } from "react-router-dom";

const MapBoard = ({ maps, isFetching, onLoad, isAuth}) => {
  useEffect(onLoad, [])
  return (
    <div  style={{ padding: "6rem" }} className="text-center">
      <h2 className="h1-responsive font-weight-bold my-5">Mis Mapas</h2>

      {isAuth && 
      <Link to={`/map/createplace`}>
        <MDBBtn size="lg" gradient="blue" type="submit">
          Crear mapa <MDBIcon className="white-text" icon="plus" /> 
        </MDBBtn>
      </Link>}

      {isFetching && (<p>Cargando ... </p>)}
        {maps.length === 0 && !isFetching &&(<p >No hay mapas aún, intenta agregar uno nuevo, ¡Comencemos!</p>) }
      
      <MDBRow >
        
         
        {
          maps.length > 0 && !isFetching && (
          maps.map((map) => (
              <MapCard
                key={map._id}
                name={map.name}
                id={map._id}
                description={map.description}
                level={map.level}
                location={map.location}
                isConfirmed={map.isConfirmed}
              />
          ))
        )}
      </MDBRow>
    </div>
  );
};

export default connect(
  (state) => ({
    maps: selectors.getMaps(state),
    isFetching: selectors.getIsFetching(state),
    isAuth: selectors.getRole(state) === 2 ? true : false,
  }),
  dispatch =>({
  onLoad(){
    dispatch(actions.startFetchingMaps());
  },
}),
)(MapBoard);
