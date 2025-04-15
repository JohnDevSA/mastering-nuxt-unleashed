// eslint.config.js
import withNuxt from './.nuxt/eslint.config.mjs';
import perfectionist from 'eslint-plugin-perfectionist';
import stylistic from '@stylistic/eslint-plugin';

export default withNuxt(
	{
		name: 'local/custom-plugins',
		plugins: {
			'@stylistic': stylistic,
			perfectionist
		},
		rules: {
			'@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/indent-binary-ops': 'off',
			'@stylistic/max-statements-per-line': 'off',
			'@stylistic/operator-linebreak': 'off',
			'@stylistic/quote-props': ['error', 'consistent'],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/space-before-function-paren': ['error', 'always'],
			'perfectionist/sort-objects': 'error',
		}
	}
)
	.prepend(
		{
			files: ['**/*.ts'],
			name: 'local/prepended',
			rules: {
				'no-console': 'warn',
			}
		}
	);