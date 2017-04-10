var chai = require('chai');
var expect = chai.expect;

var Plane = require('../src/plane');
var Airport = require('../src/airport');

describe('Plane', function() {

    describe('#Initialise', function() {

        it('should initialise as a flying plane', function() {
            var plane = new Plane();

            expect(plane.flyingStatus()).to.equal(true);
        });
    });

    describe('#Landing', function() {

        it('should be able to land', function() {
            var plane = new Plane();
            var airport = new Airport();

            plane.requestLanding(airport);

            expect(plane.flyingStatus()).to.equal(false);
            expect(airport.hangarContents()).to.contains(plane);
        });
    });

    describe('#Take-Off', function() {

        it('should be able to take-off', function() {
            var plane = new Plane();
            var airport = new Airport();

            plane.requestLanding(airport);
            expect(plane.flyingStatus()).to.equal(false);

            plane.takeOff();

            expect(plane.flyingStatus()).to.equal(true);
        });
    });
});