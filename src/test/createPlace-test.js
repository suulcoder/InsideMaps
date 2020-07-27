var chai = require('chai'); 
var assert = chai.assert; 
var should = chai.should(); 
var expect = chai.expect; 
var createPlace = require('../components/CreatePlace/index.js');

var objExample = {
	"id": 218674,
	"name": "sdkfh",
	"latitude": 189,
	"longitude": 15,
	"items": {
		"key1": {
			"type": "bathroom",
			"name": "the bathroom",
			"img": "bathroom.png",
			"coordinates": "(0.5, 0.8)",
			"level": 1,
			"associates": {
				"key2": 5,
				"key3": 10
			},
			"key2": {
				"type": "Restaurant",
				"name": "‘McDonalds’",
				"img": "log.png",
				"coordinates": "(0.5, 0.8)",
				"level": "1",
				"associates": {
					"key2": "5",
					"key3": "10"
				}
			}
		}
	}
}

describe('Testing assert function: ', function() { 
    describe('Check hasAllProperties Function', function(){ 
        it('Check the returned value using : assert.equal(value, value): ', function() { 
        result = createPlace.hasAllProperties(objExample); 
        assert.equal(result, true); 
        }); 
    }); 
})