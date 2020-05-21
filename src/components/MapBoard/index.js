import { connect } from "react-redux";
import * as selectors from "../../reducers";
import MapCard from "../MapCard";
import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdbreact";

import {
  MDBRow,
} from "mdbreact";

const MapBoard = ({ maps }) => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">Mis Mapas</h2>
      <Link to={`/map/create`}>
        <MDBBtn size="lg" gradient="blue" type="submit">
          Crear mapa <MDBIcon className="white-text" icon="plus" /> 
        </MDBBtn>
      </Link>
      
      <MDBRow className="text-center">
        {maps.length === 0 ? (
          <p>No hay mapas aún, intenta agregar uno nuevo, ¡Comencemos!</p>
        ) : (
          maps.map((map) => (
            <MapCard
              key={map._id}
              name={map.name}
              id={map._id}
              level={map.level}
            />
          ))
        )}
      </MDBRow>
    </section>
  );
};

export default connect(
  (state) => ({
    maps: selectors.getMaps(state),
  })
)(MapBoard);
