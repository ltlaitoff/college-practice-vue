module.exports = {
	presets: [['@babel/preset-env', { modules: false }]],
	env: {
		test: {
			presets: [['env', { targets: { node: 'current' } }]]
		}
	}
}
