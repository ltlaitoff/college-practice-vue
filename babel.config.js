module.exports = {
	presets: [['@babel/preset-env', { modules: 'commonjs', useBuiltIns: false }]],
	env: {
		test: {
			presets: [['env', { targets: { node: 'current' } }]]
		}
	},
	plugins: [
		'@babel/plugin-transform-runtime',
		'@babel/plugin-transform-async-to-generator'
	]
}
