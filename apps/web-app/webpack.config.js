'use strict';

const fs = require('fs');
const os = require('os');
const shell = require('shelljs');
const path = require('path');
const CopyFilesPlugin = require('copy-webpack-plugin');
const createWebpackConfig = require('@strike/web-rig/profiles/app-profile/webpack-base.config');
const { DefinePlugin } = require('webpack');

const certAndKey = {
  cert: path.resolve(os.homedir(), '.config/strike-app-certs/dev.local.crt'),
  key: path.resolve(os.homedir(), '.config/strike-app-certs/dev.local.key')
};

const hasCertAndKey = fs.existsSync(certAndKey.cert) && fs.existsSync(certAndKey.key);

console.log('\x1b[36m%s\x1b[0m', `HTTPS root cert and key are ${hasCertAndKey ? 'PRESENT' : 'MISSING'}`);

if (!hasCertAndKey) {
  console.log(
    '\x1b[36m%s\x1b[0m',
    'Run ./generate-cert.sh from the src/scripts/ with granting permission to generate self-signed cert'
  );
}

module.exports = function createConfig(env, argv) {
  return createWebpackConfig({
    env: env,
    argv: argv,
    module: {
      rules: [
        {
          test: /\.(png)$/,
          type: 'asset/resource'
        }
      ]
    },
    projectRoot: __dirname,
    // Documentation: https://webpack.js.org/configuration/
    configOverride: {
      output: {
        publicPath: '/'
      },
      performance: {
        hints: env.production ? 'error' : false
        // This specifies the bundle size limit that will trigger Webpack's warning saying:
        // "The following entrypoint(s) combined asset size exceeds the recommended limit."
        // maxEntrypointSize: 500000,
        // maxAssetSize: 500000
      },
      devServer: {
        open: true,
        // host: "localhost",
        // port: 8086,
        // historyApiFallback: true,
        https: hasCertAndKey ? certAndKey : true
        // client: {},
      },
      plugins: [
        new CopyFilesPlugin({
          patterns: [
            {
              from: 'assets/public/',
              to: './',
              toType: 'dir'
            },
            {
              from: './assets/images/',
              to: '.'
            }
          ]
        }),
        // Calculate a build number based on the current epoch timestamp.
        // Pulls 6 digits after lopping off the first 4 for readability.
        new DefinePlugin({
          __BUILD_MODE__: JSON.stringify(process.env.NODE_ENV || 'development'),
          __CLIENTVERSION__:
            "'" + require('./package.json').version + '.' + Date.now().toString().substring(2, 8) + "'",
          __LAST_COMMIT__: JSON.stringify(shell.exec('git rev-parse --short HEAD').stdout.trim()),
          __VERSION__: "'" + require('./package.json').version + "'"
        })
      ]
    }
  });
};
