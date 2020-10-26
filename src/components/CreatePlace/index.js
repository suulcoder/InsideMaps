import React, { Fragment, useState } from 'react';
import { connect } from "react-redux";
import trim from 'lodash/trim';


import * as actions from '../../actions/places';
import * as selectors from '../../reducers';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import Header from "../Header";
import Notification from '../Notification';
import Spinner from '../Spinner';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import './styles.css'

const CreatePlace = ({ isUploading, fileError, onUpload, success}) => {



    const [selectedFile, setSelectedFile] = useState(undefined);
    const [error, changeError] = useState('');
    const [jsonData, changeJsonData] = useState('');

    //var props = ["id", "name", "latitude", "longitude", "items"]

    // exports.hasAllProperties = (obj) => {
    //     for (var i = 0; i < props.length; i++) {
    //         if (!obj.hasOwnProperty(props[i]))
    //             return false;
    //     }
    //     return true;
    // };

    const handleChangeEditor = (newData) => {
        if (!jsonData) {
            changeJsonData('');
        }

        changeJsonData(newData);
    }

    const handleChange = (file) => {
        if (!jsonData) {
            changeJsonData('')
        }
        if (file.type === "application/json") {
            setSelectedFile(file);
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = e => {
                const dataInFile = { data: e.target.result };
                const refactoredFile = trim(dataInFile.data, '\t\n');
                changeJsonData(refactoredFile);
            }
        }
    }

    const uploadFile = () => {


        if (selectedFile === undefined) {
            changeError("Please, select a file");
        }
        else {
            if (selectedFile.type !== "application/json") {
                changeError("Please, select a .json file");

            }
            else {
                onUpload(jsonData);
                changeJsonData("");
                
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
                                        onChange={e => handleChange(e.target.files[0])}
                                        accept=".json"
                                    />
                                    {error.length > 0 ? <label>{error}</label> : <label></label>}
                                    {!isUploading ? <MDBBtn
                                        color="green"
                                        onClick={uploadFile}
                                    >
                                        Upload File
                                    </MDBBtn>
                                    :
                                    <Spinner />
                                    }
                                    {
                                    success &&
                                    <Notification messageText={success} />
                                    }
                                    <AceEditor
                                        onChange={handleChangeEditor}
                                        placeholder='Copy json  file here'
                                        value={jsonData}
                                        mode="json"
                                        theme="monokai"
                                        name="code_editor"
                                        editorProps={{ $blockScrolling: true }}
                                    />
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
        success: selectors.getSuccessUpload(state),
    }),
    dispatch => ({
        onUpload(file) {
            dispatch(actions.startUploadingFile(file));
        }
    })
)(CreatePlace);