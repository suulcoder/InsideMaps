const { Given, When, Then } = require('cucumber');
const puppeteer = require('puppeteer');
const {startUploadingFile} = require('../src/actions/places')
const state = {
    uploaded : null,
    isUploading : false,
    uploadError : null,
}

Given('selected file from local PC', function() {
    expect(true).toBe(true);
})

When()