'use strict';

/**
 * Module Dependencies
 */


/**
 * Implementation
 */
var MatchesFormatter = {};

MatchesFormatter.alphabetical = function(matches) {
    return matches.sort(stringCompareCaseInsensitive);
};

function stringCompareCaseInsensitive(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}

MatchesFormatter.longestFirst = function(matches) {
    return matches.sort(function(a, b) {
        var al = a.length;
        var bl = b.length;

        if (al === bl) return stringCompareCaseInsensitive(a, b);

        return al > bl ? -1 : 1;
    });
};

MatchesFormatter.shortestFirst = function(matches) {
    return matches.sort(function(a, b) {
        var al = a.length;
        var bl = b.length;

        if (al === bl) return stringCompareCaseInsensitive(a, b);

        return al < bl ? -1 : 1;
    });
};

module.exports = MatchesFormatter;
