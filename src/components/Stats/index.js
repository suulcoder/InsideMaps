import React, { Fragment } from "react";
import Header from "../Header";

import { MDBContainer, } from "mdbreact";


const Stats = () => {
    return(
        <Fragment>
            <Header nested title="Estadísticas" color="special-color-dark" />
            <MDBContainer size="md">
                <h2 className="h1-responsive text-center font-weight-bold my-5">
                    Mis Estadísticas
                </h2>
            </MDBContainer>
            
        </Fragment>
    )
}

export default Stats