import type { Linter } from 'eslint';

const config: Linter.Config = {
  root: true,
  parser: 'typescript-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-hooks', 'prettier', 'testing-library'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    'plugin:react-hooks/recommended',
  ],
  env: { node: true, browser: true, es2022: true },
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'backtick', 'avoid-escape'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'jsx-a11y/alt-text': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-undef': 'warn',
    'no-console': 'warn',
  },
};

export default config;
