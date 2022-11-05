const { DefinePlugin } = require('webpack');

const isDebug = process.env.NODE_ENV !== 'production';

// The set of stories could vary by environment if needed.
const stories = ['../lib/**/*.stories.{js,mdx}'];

module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  core: {
    builder: 'webpack5'
  },
  framework: '@storybook/react',
  stories,
  webpackFinal: async (config) => {
    config.plugins.push(
      // See here for documentation: https://webpack.js.org/plugins/define-plugin/
      new DefinePlugin({ DEBUG: isDebug })
    );
    return config;
  }
};
