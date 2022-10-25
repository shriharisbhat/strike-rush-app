// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-config/patch/modern-module-resolution");

module.exports = {
  extends: [
    "@rushstack/eslint-config/profile/web-app",
    "@rushstack/eslint-config/mixins/tsdoc",
    "@rushstack/eslint-config/mixins/react",
  ],
  parserOptions: { tsconfigRootDir: __dirname },

  settings: {
    react: {
      version: 16,
    },
  },

  overrides: [
    {
      // Extend the base override for TypeScript
      files: ["*.ts", "*.tsx"],
    },
    {
      // Extend the base override for TSX Files
      files: ["*.tsx"],

      rules: {
        "no-console": ["error", { allow: ["warn", "error", "info"] }],
        // Allow render functions to omit return type
        "@typescript-eslint/explicit-function-return-type": "off",

        // Allow StyleSheets to be defined at the end of the file
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: false,
            argsIgnorePattern: "^_",
          },
        ],
      },
    },
  ],
};

// Note: If your project uses the React framework, you should also extend from the "@rushstack/eslint-config/mixins/react" mixin.
// See the documentation for details about @rushstack/eslint-config "profiles" and "mixins".
