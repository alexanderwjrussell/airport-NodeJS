'use strict';

function Airport() {
    this._hangar = [];
    this._maximumCapacity = 2;
}

Airport.prototype.hangarContents = function() {
    return this._hangar;
};

Airport.prototype.acceptLanding = function(plane) {
    this._hangar.push(plane);
};

Airport.prototype.instructTakeOff = function(plane) {
    this._hangar.pop(plane);
    plane.takeOff();
};

module.exports = Airport;