var expect     = require('chai').expect;

describe('Matcher', function() {

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
});
