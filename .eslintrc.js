module.exports = {
	extends: ['airbnb', 'prettier'],
	parserOptions: {
		ecmaVersion: 2017,
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
	},
	plugins: ['react', 'jsx-a11y', 'import'],
	rules: {
		'comma-dangle': [
			2,
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		'react/jsx-filename-extension': 'off',
		'import/no-extraneous-dependencies': 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'no-tabs': 0,
		'react/jsx-filename-extension': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'react/prefer-stateless-function': 'off',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
	},
};
