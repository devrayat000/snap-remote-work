module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/jsx-no-target-blank": "warn",
		"no-duplicate-imports": "error"
	}
};
