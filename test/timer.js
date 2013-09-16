'use strict';

describe('Timer', function() {

    var timer = require('../lib/timer');
    var clock;

    before(function() {
        clock = sinon.useFakeTimers();
    });

    it('should know its description', function() {
        var timerA = new timer('hello');
        timerA.stop();

        expect(timerA.description).to.equal('hello');
    });

    it('should know its duration', function(done) {

        var timerA = new timer('half a second');

        setTimeout(function() {
            timerA.stop();
            expect(timerA.duration).to.be.gt(490);
            expect(timerA.duration).to.be.lt(510);
            done();
        }, 500);

        // BEND TIME
        clock.tick(500);
    });

    after(function() {
        clock.restore();
    });
});
