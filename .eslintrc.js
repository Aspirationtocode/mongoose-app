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
		'react/prop-types': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/prefer-stateless-function': 'off',
		'react/jsx-filename-extension': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'class-methods-use-this': 'off',
		'no-tabs': 0,
		'no-underscore-dangle': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'import/prefer-default-export': 'off',
	},
};
