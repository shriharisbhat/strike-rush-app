module.exports = {
  extends: [
    '@rushstack/eslint-config/profile/web-app',
    '@rushstack/eslint-config/mixins/tsdoc',
    '@rushstack/eslint-config/mixins/react',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  plugins: ['react-hooks', 'eslint-plugin-react-hooks', 'eslint-plugin-import', 'import'],
  parser: '@typescript-eslint/parser',

  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-parameter-properties': 'off'
  },

  settings: {
    react: {
      version: '17'
    },
    // For eslint-plugin-import
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      typescript: true,
      node: true,
      browser: true,
      alwaysTryTypes: true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    alphabetize: {
      order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
      caseInsensitive: true /* ignore case. Options: [true, false] */
    }
  },

  parserOptions: { tsconfigRootDir: __dirname, ecmaVersion: 2020, ecmaFeatures: { jsx: true } },
  env: {
    jest: true,
    browser: true
  },
  overrides: [
    {
      // Extend the base override for TypeScript
      files: ['*.ts', '*.tsx'],

      rules: {
        // from the docs for typescript-eslint: "We strongly recommend that you do not use the no-undef lint rule on TypeScript projects."
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        'no-undef': 'off',
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        // turn on errors for missing imports
        'import/no-unresolved': 'error',
        // Allow render functions to omit return type
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
};

// Note: If your project uses the React framework, you should also extend from the "@rushstack/eslint-config/mixins/react" mixin.
// See the documentation for details about @rushstack/eslint-config "profiles" and "mixins".
