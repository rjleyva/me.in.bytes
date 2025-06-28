import astro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  ...astro.configs['flat/recommended'],

  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.astro']
      }
    },
    rules: {}
  },

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...jsxA11y.configs.recommended.rules
    }
  }
];
