'use strict';

function Plane() {
    this._flying = true;
}

Plane.prototype.flying = function() {
   return this._flying;
};

module.exports = Plane;