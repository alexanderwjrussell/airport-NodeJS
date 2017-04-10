'use strict';

function Plane() {
    this._flying = true;
}

Plane.prototype.flyingStatus = function() {
    return this._flying;
};

Plane.prototype.requestLanding = function(airport) {
    if (airport.hangarContents().length >= airport._maximumCapacity) {
        throw new Error("Airport at capacity. Can't land.");
    }
    this._flying = false;
    airport.acceptLanding(this);
};

Plane.prototype.takeOff = function() {
    this._flying = true;
}

module.exports = Plane;