'use strict';

/**
 * Module Dependencies
 */
var _ = require('underscore');

/**
 * Implementation
 */
var WordMatcher = {};

WordMatcher.getMatches = function(input, dictionary, tick) {
    // Cache the length of the input string, and an alphabetically-sorted,
    // lower-case version of it, to save calculating these on the fly.
    var inputLength = input.length;
    var inputSorted = input.toLowerCase().split('').sort().join('');

    var dictionaryLength = dictionary.length;

    // Tick is just a callback for updating progress
    if (! _.isFunction(tick)) {
        tick = undefined;
    }

    // Return a filtered version of the given dictionary array
    var matches = dictionary.filter(function(word, i) {

        // Tick for feedback
        tick && (i % 1000 == 0) && tick(i,  dictionaryLength);

        // If the word length is more than the number of input characters, we can
        // immediately discard this word.
        // We then lower-case the word, sort it, and prepare a regex pattern as follows:
        // The word 'Cat' becomes the regex /a.*c.*t/i
        // We can then see if the sorted version of the input string matches this pattern.
        // E.g. if the sorted input string is 'aaaabcccgggt' our regex /a.*c.*t/i would match.
        return word.length <= inputLength && inputSorted.match(new RegExp(word.toLowerCase().split('').sort().join('.*'), 'i'));
    });

    // Final tick to say we’re at 100%
    tick && tick(dictionaryLength, dictionaryLength);

    return matches;
};

WordMatcher.getMatchesGroupedByLength = function(input, dictionary) {
    return _.groupBy(WordMatcher.getMatches(input, dictionary), function(word) {
        return word.length;
    });
};

WordMatcher.getLongestMatches = function(input, dictionary) {
    return getLongestOrShortestMatches(input, dictionary, _.max);
};

WordMatcher.getShortestMatches = function(input, dictionary) {
    return getLongestOrShortestMatches(input, dictionary, _.min);
};

function getLongestOrShortestMatches(input, dictionary, keyComparer) {
    var matchesGroupedbyLength = WordMatcher.getMatchesGroupedByLength(input, dictionary);
    var lengthKey = keyComparer(_.keys(matchesGroupedbyLength), function(num) {
        return parseInt(num);
    });

    return matchesGroupedbyLength[lengthKey];
}

WordMatcher.getMatchesCount = function(input, dictionary) {
    return WordMatcher.getMatches(input, dictionary).length;
};

module.exports = WordMatcher;
