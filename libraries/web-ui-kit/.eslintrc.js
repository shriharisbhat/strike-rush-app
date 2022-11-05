require('@strike/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: ['@strike/eslint-config/profile/web-app'],
  parserOptions: { tsconfigRootDir: __dirname }
};
