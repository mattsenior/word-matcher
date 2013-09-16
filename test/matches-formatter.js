'use strict';

describe('Matches Formatter', function() {

    var formatter = require('../lib/matches-formatter');
    var matches   = ['cat', 'dog', 'a', 'melon'];

    describe('#alphabetical()', function() {

        it('should return results in alphabetical order', function() {
            expect(formatter.alphabetical(matches)).to.deep.equal([
                'a', 'cat', 'dog', 'melon'
            ]);
        });
    });

    describe('#longestFirst()', function() {

        it('should return results in size order (longest first) then alphabetically', function() {
            expect(formatter.longestFirst(matches)).to.deep.equal([
                'melon', 'cat', 'dog', 'a'
]);
        });
    });

    describe('#shortestFirst()', function() {

        it('should return results in size order (shortest first) then alphabetically', function() {
            expect(formatter.shortestFirst(matches)).to.deep.equal([
                'a', 'cat', 'dog', 'melon'
            ]);
        });
    });
});
