"use strict";

const createWebpackConfig = require("@strike/web-rig/profiles/app/webpack-base.config");
const CopyFilesPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");
const fs = require("fs");
const shell = require("shelljs");

module.exports = function createConfig(env, argv) {
  return createWebpackConfig({
    env: env,
    argv: argv,
    module: {
      rules: [
        {
          test: /\.(png)$/,
          type: "asset/resource",
        },
      ],
    },
    projectRoot: __dirname,
    // Documentation: https://webpack.js.org/configuration/
    configOverride: {
      output: {
        publicPath: "/",
      },
      performance: {
        hints: env.production ? "error" : false,
        // This specifies the bundle size limit that will trigger Webpack's warning saying:
        // "The following entrypoint(s) combined asset size exceeds the recommended limit."
        // maxEntrypointSize: 500000,
        // maxAssetSize: 500000
      },
      devServer: {
        host: "localhost",
        port: 8096,
        historyApiFallback: true,
        https: true,
      },
      plugins: [
        new CopyFilesPlugin({
          patterns: [
            {
              from: "assets/public/",
              to: "./",
              toType: "dir",
            },
            {
              from: "./assets/images/",
              to: ".",
            },
          ],
        }),
        // Calculate a build number based on the current epoch timestamp.
        // Pulls 6 digits after lopping off the first 4 for readability.
        new DefinePlugin({
          __BUILD_MODE__: JSON.stringify(process.env.NODE_ENV || "development"),
          __CLIENTVERSION__:
            "'" +
            require("./package.json").version +
            "." +
            Date.now().toString().substring(2, 8) +
            "'",
          __LAST_COMMIT__: JSON.stringify(
            shell.exec("git rev-parse --short HEAD").stdout.trim()
          ),
          __VERSION__: "'" + require("./package.json").version + "'",
        }),
      ],
    },
  });
};
