var chai = require('chai');
var expect = chai.expect;

var Plane = require('../src/plane');

describe('Plane', function() {

    describe('#Initialise', function() {

        it('should initialise as a flying plane', function() {
            var plane = new Plane();

            expect(plane.flying()).to.equal(true);
        });
    });

});