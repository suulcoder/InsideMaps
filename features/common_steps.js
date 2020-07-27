const { Given, When, Then } = require('cucumber');
const puppeteer = require('puppeteer');

const startUploadingFile = file => ({
    type: "UPLOAD_PLACES_STARTED",
    payload: {
        file,
    }
});

const completeUploadingFile = () => ({
    type: "UPLOAD_PLACES_COMPLETED",
});

const failedUploadingFile = error => ({
    type: types.UPLOAD_PLACES_FAILED,
    payload: {
        error,
    }
});

const state = {
    uploaded : null,
    isUploading : false,
    uploadError : null,
}

Given('selected file from local PC',  function() {
    const file = {data:'data'}
    const action = startUploadingFile(file);
    console.assert(action.payload.file,file)
    console.assert(action.type, "UPLOAD_PLACES_STARTED");
})

When('clicking in upload', function(){
    const action = completeUploadingFile();
    console.assert(action.type, "UPLOAD_PLACES_COMPLETED")
})

Then('the file is in the server', function() {
    
})