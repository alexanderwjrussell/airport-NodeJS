'use strict';

function Airport() {
    this._hangar = [];

}

Airport.prototype.hangar = function() {
    return this._hangar;
};

module.exports = Airport;