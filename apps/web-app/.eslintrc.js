// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@strike/eslint-config/patch/modern-module-resolution');

// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@strike/eslint-config/profile/web-common'],
  // eslint-disable-next-line no-undef
  parserOptions: { tsconfigRootDir: __dirname }
};
