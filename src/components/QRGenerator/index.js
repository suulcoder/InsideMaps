import { connect } from "react-redux";
import React, { useState, useRef, Fragment, useEffect } from "react";
import Header from "../Header";
import { URL } from "../../configuration";

import QRCode from 'qrcode.react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput, MDBIcon, MDBLink} from "mdbreact";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import { change } from "redux-form";

const QRGenerator = () => {
    
    const [qrValue, changeQrValue] = useState('')

    const handleEditor = (newData) => {
        changeQrValue(newData);
    }

    const handleDownload = () => {
        console.log("Si entro al handelDownload");
        const canvas = document.getElementById("QRCodeGenCanva");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "QRCode.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <Fragment>
            <Header nested title="QR Generator" color="special-color-dark" />
            <MDBContainer size="md">
                <h2 className="h1-responsive text-center font-weight-bold my-5">
                    QR code generator
                </h2>
                <MDBCard className="dark-grey-text">
                    <MDBRow className="container pb-0">
                        <MDBCol md="6">
                            <AceEditor
                                value={qrValue}
                                placeholder='Copy json file here'
                                mode="json"
                                theme="monokai"
                                name="code_editor"
                                editorProps={{ $blockScrolling: true }}
                                onChange={handleEditor}
                            />
                            </MDBCol>
                        <MDBCol md="6">
                            <QRCode
                                id="QRCodeGenCanva"
                                level="H"
                                size={512}
                                value={qrValue}
                            />
                            <MDBLink onClick={handleDownload} link> Descargar código QR </MDBLink>
                        </MDBCol>
                        </MDBRow>
                    <MDBRow className="container pt-0">
                        <MDBCol md="4">
                            
                            <MDBInput
                                label="Ingrese identificador"
                            ></MDBInput>
                            <MDBBtn
                                outline
                                color="success"
                            >
                                <MDBIcon icon="qrcode" className="mr-1 green-text"/>
                                Generar
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>

            </MDBContainer>
        </Fragment>
    )
}

export default QRGenerator;