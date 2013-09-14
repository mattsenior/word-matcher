var expect = require('chai').expect;

describe('WordMatcher', function() {

    var matcher    = require('../');
    var dictionary = require('../lib/dictionary');

    describe('#getMatches()', function() {

        it('should get no matches when there are none', function() {
            expect(matcher.getMatches('xyz', dictionary)).to.deep.equal([]);
        });

        it('should get a single match', function() {
            expect(matcher.getMatches('Wu', dictionary)).to.deep.equal(['Wu']);
        });

        it('should get multiple matches', function() {
            expect(matcher.getMatches('cat', dictionary)).to.deep.equal([
                'act', 'at', 'cat'
            ]);

            expect(matcher.getMatches('act', dictionary)).to.deep.equal([
                'act', 'at', 'cat'
            ]);

            expect(matcher.getMatches('abct', dictionary)).to.deep.equal([
                'act', 'at', 'bat', 'cab', 'cat', 'tab'
            ]);

            expect(matcher.getMatches('frogzo', dictionary)).to.deep.equal([
                'fog', 'for', 'fro', 'frog', 'go', 'goof', 'of', 'or', 'Oz', 'roof', 'zoo'
            ]);
        });

        it('should be case insensitive', function() {
            expect(matcher.getMatches('Wu', dictionary)).to.deep.equal(['Wu']);
            expect(matcher.getMatches('wu', dictionary)).to.deep.equal(['Wu']);
        });

        it("should handle apostrophes, e.g. O'Neill", function() {
            expect(matcher.getMatches("ei'llon", dictionary)).to.include("O'Neill");
        });
    });

    describe('#getMatchesGroupedByLength()', function() {
        it('should return matches grouped by length', function() {
            expect(matcher.getMatchesGroupedByLength('abcde', dictionary)).to.deep.equal({
                2: ['ad', 'be', 'De', 'Ed'],
                3: ['Abe', 'ace', 'bad', 'bed', 'cab', 'DEC'],
                4: ['abed', 'bade', 'bead']
            });
        });
    });

    describe('#getLongestMatches()', function() {
        it('should return the longest matches', function() {
            expect(matcher.getLongestMatches('been', dictionary)).to.deep.equal(['been', 'Eben']);
        });

        it('should return the longest single match', function() {
            expect(matcher.getLongestMatches('aacrttisnot', dictionary)).to.deep.equal(['attractions']);
        });
    });

    describe('#getShortestMatches()', function() {
        it('should return the shortest matches', function() {
            expect(matcher.getShortestMatches('been', dictionary)).to.deep.equal(['be', 'en']);
        });

        it('should return the shortest single match', function() {
            expect(matcher.getShortestMatches('uvwxyz', dictionary)).to.deep.equal(['Wu']);
        });
    });

    describe('#getMatchesCount()', function() {
        it('should return the number of matches', function() {
            expect(matcher.getMatchesCount('abcde', dictionary)).to.equal(13);
            expect(matcher.getMatchesCount('uvwxyz', dictionary)).to.equal(1);
        });
    });
});
