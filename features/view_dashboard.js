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

Given('an admin registered in the platform',  function() {
    const file = {data:'data'}
    const action = startUploadingFile(file);
    console.assert(action.payload.file,file)
    console.assert(action.type, "UPLOAD_PLACES_STARTED");
})

Given('a dashboard with maps',  function() {
    const file = {data:'data'}
    const action = startUploadingFile(file);
    console.assert(action.payload.file,file)
    console.assert(action.type, "UPLOAD_PLACES_STARTED");
})


Then('located in the main view for admins',  function() {
    const file = {data:'data'}
    const action = startUploadingFile(file);
    console.assert(action.payload.file,file)
    console.assert(action.type, "UPLOAD_PLACES_STARTED");
})



When('I click on a map', function(){
    const action = completeUploadingFile();
    console.assert(action.type, "UPLOAD_PLACES_COMPLETED")
})

Then('I want to see the map', function() {
    console.log("Map")
})

Then('the distribution of all the area', function() {
    console.log("distriburion of all area")
})

