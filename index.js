const testCase01 = (config, events, done) => {
	console.log(config.vars.clientId);
	console.log(config.vars.secret);
	return done();
};

module.exports = { testCase01 };
