MOCHA_OPTS = --check-leaks
REPORTER = spec

# Phony targets
.PHONY: test test-watch

# Run tests with `make test`
test: 
	@NODE_ENV=test ./node_modules/.bin/mocha --reporter $(REPORTER) $(MOCHA_OPTS)

test-watch: MOCHA_OPTS += --watch
test-watch: test
