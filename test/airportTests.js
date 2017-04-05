var chai = require('chai');
var expect = chai.expect;

var Airport = require('../src/airport');

describe('Airport', function() {

    describe('#Initialise', function() {

        it('should have an empty hangar', function() {
            var airport = new Airport();

            expect(airport.hangar().length).to.equal(0);
        });
    });
});

