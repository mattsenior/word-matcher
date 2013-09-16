'use strict';

/**
 * Module Dependencies
 */

/**
 * Implementation
 */
function Timer(description) {
    this.description = description;
    this.start       = new Date().getTime();
}

Timer.prototype.stop = function() {
    this.end = new Date().getTime();
    this.duration = this.end - this.start;
}

Timer.prototype.toString = function() {
    return (this.duration / 1000) + 's';
}

module.exports = Timer;
