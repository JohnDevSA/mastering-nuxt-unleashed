// eslint.config.js
import withNuxt from './.nuxt/eslint.config.mjs';
import perfectionist from 'eslint-plugin-perfectionist';
import stylistic from '@stylistic/eslint-plugin';
import vue from 'eslint-plugin-vue';

export default withNuxt(
	{
		name: 'local/custom-plugins',
		plugins: {
			'@stylistic': stylistic,
			perfectionist,
			'vue': vue,
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
			'vue/block-order': ['error', {
				'order': ['template', 'script', 'style']
			}],
			'vue/multi-word-component-names': 'off',
			'vue/no-empty-component-block': 'error',
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