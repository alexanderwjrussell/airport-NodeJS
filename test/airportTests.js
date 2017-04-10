var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var Airport = require('../src/airport');
var Plane = require('../src/plane');

describe('Airport', function() {

    describe('#Initialise', function() {

        it('should have an empty hangar', function() {
            var airport = new Airport();

            expect(airport.hangarContents().length).to.equal(0);
        });
    });

    describe('#Landing', function() {

       it('stores the landed plane in the hangar', function() {
           var airport = new Airport();
           var plane = new Plane();

           airport.acceptLanding(plane);

           expect(airport.hangarContents()).to.contains(plane);
        });

       it('cannot let a plane land if the airport is at capacity', function() {
           var airport = new Airport();
           var plane1 = new Plane();
           var plane2 = new Plane();
           var plane3 = new Plane();

           plane1.requestLanding(airport);
           plane2.requestLanding(airport);


           expect(function () { plane3.requestLanding(airport); }).to.throws("Airport at capacity. Can't land.");
       });
    });

    describe('#Take-Off', function() {

       it('can instruct planes to take off and remove them from the hangar', function() {
           var airport = new Airport();
           var plane = new Plane();

           plane.requestLanding(airport);
           expect(airport.hangarContents()).to.contains(plane);

           airport.instructTakeOff(plane);

           expect(airport.hangarContents()).not.to.contains(plane);
       });
    });
});

