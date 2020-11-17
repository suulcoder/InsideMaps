import { connect } from "react-redux";
import React, { Fragment, useEffect } from "react";
import Header from "../Header";
import * as selectors from "../../reducers";
import * as actions from '../../actions/reports';

import Stats from '../Stats'

import { MDBContainer, MDBTable,MDBTableBody, MDBTableHead, MDBRow, MDBCol} from "mdbreact";


const Reports = ({ errors, isFetching, onLoad, isAuth}) => {
    useEffect(onLoad, [])
    console.log(errors)
    return(
        <Fragment>
            <Header nested title="Reportes" color="special-color-dark" />
            <MDBContainer size="md">
                <h2 className="h1-responsive text-center font-weight-bold my-5">
                    Reportes
                </h2>
                {isFetching && (
                    <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
        {errors === null && !isFetching &&(<p >No hay errores reportados aún</p>) }
            </MDBContainer>
            <div style={{ margin: "2rem", }}>
                <MDBRow>
                    <MDBCol xl="6">
                        <Stats/>
                    </MDBCol>
                    <MDBCol xl="6">
                        <MDBTable hover>
                            <MDBTableHead color="unique-color" textWhite>
                                <tr>
                                <th>User Id</th>
                                <th>Nombre</th>
                                <th>Fecha</th>
                                <th>Descripción</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                            {errors != null && !isFetching && (
                                errors.map((error) => (
                                    <tr>
                                    <td>{error.user_id}</td>
                                    <td>{error.name}</td>
                                    <td>{error.date}</td>
                                    <td>{error.description}</td>    
                                    </tr>
                                ))
                                )}                    
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
                
            </div>
            
        </Fragment>
    )
}

export default connect(
    (state) => ({
      errors: selectors.getErrorData(state),
      isFetching: selectors.getIsFetchingErrorData(state),
      isAuth: selectors.getRole(state) === 2 ? true : false,
    }),
    dispatch =>({
    onLoad(){
      dispatch(actions.startFetchingErrorData());
    },
  }),
  )(Reports);