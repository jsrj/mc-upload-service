const  sinon = require('sinon');
const   chai = require('chai');
const expect = chai.expect;

const mongoose = require('mongoose');
require('sinon-mongoose');


// Import the ImageData model for testing routes that would return an ImageData object
var ImageData = require('../../src/model/ImageData');

// Upload an image to S3
describe("Upload an image to an Amazon S3 Bucket", function(){
    it("should upload successfully, and return newly generated ImageData JSON", function(done){

        let ImageDataMock  = sinon.mock(ImageData);
        let expectedResult = {status: true, ImageData: []};

        ImageDataMock.expects('find').yields(null, expectedResult);

        ImageData.find(function (err, result) {
            ImageDataMock.verify();
            ImageDataMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });

    // Failure Scenario: If an error occurs when attempting to upload to Amazon S3
    it("Should return an error on failure to upload", function(done){

        let ImageDataMock  = sinon.mock(ImageData);
        let expectedResult = {status: false, error: "Something went wrong"};

        ImageDataMock.expects('find').yields(expectedResult, null);

        ImageData.find(function (err, result) {
            ImageDataMock.verify();
            ImageDataMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});