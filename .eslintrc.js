module.exports = {
	root: true,
	env: {
		node: true,
		jest: true,
		'jest/globals': true
	},
	extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	plugins: ['prettier', 'jest'],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['warn', 'single'],
		semi: ['error', 'never'],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-expect': 'error',
		'jest/expect-expect': [
			'error',
			{
				assertFunctionNames: ['expect'],
				additionalTestBlockFunctions: []
			}
		]
	},
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/**/*.spec.{j,t}s?(x)']
		}
	]
}
