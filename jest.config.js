module.exports = {
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['js', 'json', 'vue'],
	transform: {
		'.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest'
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	injectGlobals: true
}
