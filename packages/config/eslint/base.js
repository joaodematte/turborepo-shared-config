module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'turbo'
  ],
  plugins: ['react', 'import'],
  rules: {},
  ignorePatterns: ['dist', '**/*.js', '**/*.json', 'node_modules'],
  settings: {
    'react': {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/order': [
      'error',
      {
        groups: ['type', 'object', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index']
      }
    ]
  }
};
