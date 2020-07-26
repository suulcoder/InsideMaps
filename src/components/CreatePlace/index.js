import React, { Fragment, useState} from 'react';
import { connect } from "react-redux";
import trim from 'lodash/trim';

import './styles.css'

import * as actions from '../../actions/places';
import * as selectors from '../../reducers';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import Header from "../Header";


const CreatePlace = ({isUploading, fileError, onUpload}) => {


    
    const [selectedFile, setSelectedFile] = useState(undefined);
    const [error, changeError] = useState('');

    const uploadFile = () => {
     

        if (selectedFile === undefined) {
            changeError("Please, select a file");
        }
        else {
            if(selectedFile.type !== "application/json") {
                changeError("Please, select a .json file");
    
            }
            else {
                let reader = new FileReader();
                reader.readAsText(selectedFile);
                reader.onload = e => {
                    const file = {data : e.target.result};
                    const refactoredFile = trim(file.data, '\t\n');
                    onUpload(refactoredFile);
                    changeError("");
                }
                //TODO: CHECK FOR WELL FORMAT DATA
            }
        }

    }

    return (
        <Fragment>
            <Header nested title="Create Place" color="special-color-dark" />
            <MDBContainer size="md">
                <h2 className="h1-responsive text-center font-weight-bold my-5">
                    Create new place
          </h2>
                <MDBCard className="dark-grey-text">
                    <MDBCardBody className="z-depth-2">
                        <MDBRow className="container">
                            <MDBCol md="4" className="mb-3">
                                <label
                                    htmlFor="defaultFormRegisterNameEx"
                                    className="grey-text"
                                >
                                    Upload file
                  </label>
                                <input
                                    name="file"
                                    type="file"
                                    id="defaultFormRegisterFile"
                                    className="form-control"
                                    placeholder="File"
                                    required
                                    onChange={e => setSelectedFile(e.target.files[0])}
                                    accept=".json"
                                />
                                {error.length > 0 ? <label>{error}</label> : <label></label>}
                        <MDBBtn
                            color="green"
                            onClick={uploadFile}
                        >
                            Upload File
                        </MDBBtn>
                            </MDBCol>
                        </MDBRow>                        
              </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </Fragment>
    );
}

export default connect(
    state => ({
        isUploading: selectors.getIsUploading(state),
        fileError: selectors.getUploadError(state),
    }),
    dispatch => ({
        onUpload(file){
            console.log(file);
            dispatch(actions.startUploadingFile(file));
        }
    })
)(CreatePlace);