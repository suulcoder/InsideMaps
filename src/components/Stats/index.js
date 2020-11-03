import React, { Fragment, useEffect } from "react";
import Header from "../Header";
import * as selectors from "../../reducers";
import * as actions from '../../actions/stats';
import Chart from "./Chart"
import { connect } from "react-redux";

import { MDBContainer} from "mdbreact";

const Stats = ({ data, isFetching, onLoad}) => {
    useEffect(onLoad, [])  
    
    return(
        <Fragment>
            <Header nested title="Estadísticas" color="special-color-dark" />
            <MDBContainer size="md">
            <h3 className="h3-responsive text-center font-weight-bold my-5">
                    Lugares más visitados
                </h3>
                {data != null && !isFetching && (
                  <Chart collection={data}/>
                )
                }
            </MDBContainer>
        </Fragment>
    )
}

export default connect(
  state => ({
    data: selectors.getStats(state),
    isFetching: selectors.getIsFetchingStats(state),
    isAuth: selectors.getRole(state) === 2 ? true : false,
  }),
  dispatch => ({
    onLoad() {
      dispatch(actions.startFetchingStats());
    },
  }),
)(Stats);