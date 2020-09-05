import Spinner from "../Spinner";
import { connect } from "react-redux";
import { getError, getIsLogging } from "../../reducers";
import { validateEmail } from "../../modules/validate";
import * as actions from "../../actions/auth";
import React, { useState } from "react";
import "./styles.css";

import {
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBInput,
} from "mdbreact";

const Login = ({ Message, onSubmit, loginSatus }) => {
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  return (
          <MDBCard
            id="login"
            className="card-image"
            style={{
              width: "28rem",
              margin: "1rem"
            }}
          >
            <div className=" py-5 px-5 z-depth-1">
              <div className="text-center">
                <h3 className="mb-5 mt-4 font-weight-bold">
                  <strong>SIGN</strong>
                  <a href="#!" className="green-text font-weight-bold">
                    <strong> IN</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
                label="Your email"
                group
                type="text"
                validate
                labelClass="black-text"
                value={email}
                onChange={e => changeEmail(e.target.value)}
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                labelClass="black-text"
                value={password}
                onChange={e=>changePassword(e.target.value)}
              />

              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">

                    { loginSatus ? <Spinner /> :
                        <div >
                            <MDBBtn
                                color="success"
                                rounded
                                type="button"
                                className="btn-block z-depth-1"
                                onClick={
                                    () => onSubmit(email,password)
                                }
                            >Sign In</MDBBtn>
                        </div>
                    }
                </div>
                <div className='errorText'>{Message}</div>
              </MDBRow>
            </div>
          </MDBCard>
  );
};

export default connect(
  (state) => ({
    Message:
      getIsLogging(state) !== null
        ? getIsLogging(state)
          ? "LOADING..."
          : getError(state)
        : undefined,
    loginSatus: getIsLogging(state),
  }),
  (dispatch) => ({
    onSubmit(email, password) {
      if (email && password) {
        if (validateEmail(email)) {
          dispatch(actions.startLogin(email, password));
        } else {
          dispatch(actions.failLogin("WRITE A VALID EMAIL", 0));
        }
      } else if (!email) {
        dispatch(actions.failLogin("EMAIL FIELD MUST NOT BE EMPTY", 0));
      } else if (!password) {
        dispatch(actions.failLogin("PASSWORD FIELD MUST NOT BE EMPTY", 0));
      }
    },
  })
)(Login);
