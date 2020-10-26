import { connect } from "react-redux";
import React, { Fragment, useEffect } from "react";
import Header from "../Header";
import * as selectors from "../../reducers";
import * as actions from '../../actions/reports';

import { MDBContainer, MDBTable,MDBTableBody, MDBTableHead,} from "mdbreact";


const Reports = ({ errors, isFetching, onLoad, isAuth}) => {
    useEffect(onLoad, [])
    console.log(errors)
    return(
        <Fragment>
            <Header nested title="Errores" color="special-color-dark" />
            <MDBContainer size="md">
                <h2 className="h1-responsive text-center font-weight-bold my-5">
                    Reporte de errores
                </h2>
                {isFetching && (<p>Cargando ... </p>)}
        {errors === null && !isFetching &&(<p >No hay errores reportados aún</p>) }
            </MDBContainer>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                    <th>User Id</th>
                    <th>Fecha</th>
                    <th>Descripción</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                {errors != null && !isFetching && (
                    errors.map((error) => (
                        <tr>
                        <td>{error.user_id}</td>
                        <td>{error.date}</td>
                        <td>{error.description}</td>    
                        </tr>
                    ))
                    )}                    
                </MDBTableBody>
            </MDBTable>
            
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