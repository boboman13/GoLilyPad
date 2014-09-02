// test_client.js
var mc = require('minecraft-protocol'),
	exec = require('child_process').exec;

describe('GoLilyPad server', function() {
	it('connect should compile without error', function(done) {
		exec('go build', {cwd: './server/connect/main/'}, function(error, stdout, stderr) {
			if (error) {
				assert.notOk(error, 'build did fail');
				done();
			}

			done();
		});
	});

	it('server should compile without error', function(done) {
		exec('go build', {cwd: './server/proxy/main/'}, function(error, stdout, stderr) {
			if (error) {
				assert.notOk(error, 'build did fail');
				done();
			}

			done();
		});
	});
});