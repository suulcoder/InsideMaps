import { connect } from "react-redux";
import { getError, getIsSigning } from "../../reducers";
import { validateEmail } from "../../modules/validate";
import Switch from "react-switch";
import * as actions from "../../actions/auth";
import React, { useState } from "react";
import Spinner from "../Spinner";
import "./styles.css";

import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from "mdbreact";

const SignUp = ({ Message, onSubmit, signInStatus }) => {
  const [user, changeUser] = useState("");
  const [password, changePassword] = useState("");
  const [passwordConfirm, changePasswordComfirm] = useState("");
  const [email, changeEmail] = useState("");
  const [name, changeName] = useState("");
  const [lastname, changeLastname] = useState("");
  const [age, changeAge] = useState("0");
  const [sex, changesex] = useState(true);
  const toggleSwitch = (previousState) => changesex(!previousState);

  return (
        <MDBCard
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
                <a href="#!" className="blue-text font-weight-bold">
                  <strong> UP</strong>
                </a>
              </h3>
            </div>
            <MDBInput
              label="Usuario*"
              group
              type="text"
              validate
              labelClass="black-text"
              value={user}
              onChange={(e) => changeUser(e.target.value)}
            />
            <MDBInput
              label="Correo*"
              group
              type="email"
              validate
              labelClass="black-text"
              value={email}
              onChange={(e) => changeEmail(e.target.value)}
            />
            <MDBInput
              label="Nombre*"
              group
              type="text"
              validate
              labelClass="black-text"
              value={name}
              onChange={(e) => changeName(e.target.value)}
            />
            <MDBInput
              label="Apellido*"
              group
              type="text"
              validate
              labelClass="black-text"
              value={lastname}
              onChange={(e) => changeLastname(e.target.value)}
            />
            <MDBInput
              label="Contraseña"
              group
              type="password"
              validate
              labelClass="black-text"
              value={password}
                  onChange={(e) => changePassword(e.target.value)}
            />
            <MDBInput
              label="Confirmar contraseña"
              group
              type="password"
              validate
              labelClass="black-text"
              value={passwordConfirm}
                  onChange={(e) => changePasswordComfirm(e.target.value)}
            />
            <MDBRow className="d-flex align-items-center mb-4 mt-5">
                <MDBCol md="5" className="d-flex align-items-start">
                    <div className="textSmall">Edad: </div>
                    <MDBInput
                        type="number"
                        className="inputShort"
                        placeholder="Edad"
                        value={age}
                        onChange={(e) => changeAge(e.target.value)}
                    />
                </MDBCol>
                <MDBCol md="7" className="d-flex justify-content-end">
                    M &#x9; <Switch onChange={(e) => toggleSwitch} value={sex} /> &#x9; F
                </MDBCol>
            </MDBRow>
            <div className="errorText">{Message}</div>

            <MDBRow className="d-flex align-items-center mb-4">
              <div className="text-center mb-3 col-md-12">
                {signInStatus ? (
                  <Spinner />
                ) : (
                  <div>
                    <MDBBtn
                      color="primary"
                      rounded
                      type="button"
                      className="btn-block z-depth-1"
                      onClick={() =>
                        onSubmit(
                          name,
                          lastname,
                          user,
                          email,
                          password,
                          age,
                          sex,
                          passwordConfirm
                        )
                      }
                    >
                      Registrarme
                    </MDBBtn>
                  </div>
                )}
              </div>
              <div className="errorText">{Message}</div>
            </MDBRow>
          </div>
        </MDBCard>
  );
};

export default connect(
  (state) => ({
    Message:
      getIsSigning(state) !== null
        ? getIsSigning(state)
          ? 
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          : getError(state)
        : undefined,
    signInStatus: getIsSigning(state),
  }),
  (dispatch) => ({
    onSubmit(name, lastname, user, email, password, age, sex, passwordConfirm) {
      if (user && password && lastname && name && email && age) {
        if (password === passwordConfirm) {
          if (age > 0 || !age) {
            if (validateEmail(email)) {
              dispatch(
                actions.startSignUp(
                  name,
                  lastname,
                  user,
                  email,
                  password,
                  age,
                  sex ? 0 : 1
                )
              );
            } else {
              dispatch(actions.failLogin("WRITE A VALID EMAIL", 1));
            }
          } else {
            dispatch(actions.failLogin("WRITE A VALID AGE", 1));
          }
        } else {
          dispatch(actions.failLogin("PASSWORDS MUST MATCH", 1));
        }
      } else if (!user) {
        dispatch(actions.failLogin("USER FIELD MUST NOT BE EMPTY", 1));
      } else if (!password) {
        dispatch(actions.failLogin("PASSWORD FIELD MUST NOT BE EMPTY", 1));
      } else if (!name) {
        dispatch(actions.failLogin("NAME FIELD MUST NOT BE EMPTY", 1));
      } else if (!lastname) {
        dispatch(actions.failLogin("LASTNAME FIELD MUST NOT BE EMPTY", 1));
      } else if (!email) {
        dispatch(actions.failLogin("EMAIL FIELD MUST NOT BE EMPTY", 1));
      } else if (!age) {
        dispatch(actions.failLogin("AGE FIELD MUST NOT BE EMPTY", 1));
      }
    },
  })
)(SignUp);
