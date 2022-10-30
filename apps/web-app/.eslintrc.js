// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@strike/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: ['@strike/eslint-config/profile/web-common'],
  parserOptions: { tsconfigRootDir: __dirname }
};
