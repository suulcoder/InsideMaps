Feature: Create place
    As platform admin
    I want to upload a new place file
    So that I can create a new place

    Scenario: Upload file
        Given selected file from local PC
        When complete file uploading
        Then the file is in the server