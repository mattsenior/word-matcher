'use strict';

var _ = require('underscore');

describe('CLI Handler', function() {

    var cliHandler = require('../lib/cli-handler');

    describe('#ask()', function() {

        var sandbox;
        var spies;

        beforeEach(function() {
            sandbox = sinon.sandbox.create();

            spies = {
                stdin: {
                    resume:      sandbox.spy(process.stdin, 'resume'),
                    setEncoding: sandbox.spy(process.stdin, 'setEncoding')
                },
                stdout: {
                    write: sandbox.spy(process.stdout, 'write')
                }
            };
        });

        afterEach(function() {
            sandbox.restore();
        });

        it('should call process.stdin.resume', function() {
            cliHandler.ask('question');
            expect(spies.stdin.resume).to.have.been.calledOnce;
        });

        it('should call process.stdin.setEncoding', function() {
            cliHandler.ask('question');
            expect(spies.stdin.setEncoding).to.have.been.calledOnce;
            expect(spies.stdin.setEncoding).to.have.been.calledWithExactly('utf8');
        });

        it('should call process.stdin.resume before process.stdin.setEncoding', function() {
            cliHandler.ask('question');
            expect(spies.stdin.resume).to.have.been.calledBefore(spies.stdin.setEncoding);
        });

        it('should print the question', function() {
            cliHandler.ask('A Question');
            expect(spies.stdout.write).to.have.been.calledWithExactly('A Question: ');
        });
    });
});
