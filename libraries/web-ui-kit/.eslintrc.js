require('@strike/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: ['@strike/eslint-config/profile/web-app'],
  parserOptions: { tsconfigRootDir: __dirname },
  overrides: [
    {
      // Extend the base override for TypeScript
      files: ['*.ts', '*.tsx'],

      rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        // Allow render functions to omit return type
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
};
