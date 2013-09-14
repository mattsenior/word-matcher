MOCHA_OPTS = --check-leaks
REPORTER = dot

# Phony targets
.PHONY: test test-spec

# Run tests with `make test`
test: 
	@NODE_ENV=test ./node_modules/.bin/mocha --reporter $(REPORTER) $(MOCHA_OPTS)

test-watch: MOCHA_OPTS += --watch
test-watch: test
