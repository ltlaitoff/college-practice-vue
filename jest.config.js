module.exports = {
	testEnvironment: 'jsdom',
	moduleFileExtensions: [
		'js',
		'json',
		// сообщаем Jest что необходимо обрабатывать `*.vue` файлы
		'vue'
	],
	transform: {
		// обрабатываем `*.vue` файлы с помощью `vue-jest`
		'.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest'
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	}
}
