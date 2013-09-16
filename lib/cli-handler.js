'use strict';

/**
 * Module Dependencies
 */

/**
 * Implementation
 */
var cliHandler = {};

cliHandler.ask = function(question, callback) {
    var stdin  = process.stdin;
    var stdout = process.stdout;

    stdin.resume();
    stdin.setEncoding('utf8');

    stdout.write(question + ': ');
};

module.exports = cliHandler;
