const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
// required if using external remotes
// const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: {
    main: "./src/index.js",
  },
  devtool: "source-map",
  optimization: {
    minimize: mode === "production",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
      {
        test: /\.md$/,
        loader: "raw-loader",
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/mfe-app-a": {
        target: "http://localhost:3002",
        pathRewrite: { "^/mfe-app-a": "" },
      },
      "/mfe-app-r": {
        target: "http://localhost:3001",
        pathRewrite: { "^/mfe-app-r": "" },
      },
      "/mfe-app-v": {
        target: "http://localhost:3003",
        pathRewrite: { "^/mfe-app-v": "" },
      },
    },
  },
  experiments: {
    outputModule: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "MyHostApp",
      filename: "remoteEntry.js",
      remotes: {
        // we can use env variables to define the remote url, for example:mfeAppR@${env.MFE_APP_R_URL}/remoteEntry.js
        // mfeAppR: "mfeAppR@http://localhost:3001/remoteEntry.js",
        // mfeAppA: "mfeAppA@http://localhost:3002/remoteEntry.js",
        // mfeAppV: "mfeAppV@http://localhost:3003/assets/remoteEntry.js",
        // or we can use the window object to define the remote url, for example: mfeAppR@${window["mfeAppRUrl"]}/remoteEntry.js
        // mfeAppR: "mfeAppR@[window.mfeAppRUrl]/remoteEntry.js",
      },
      exposes: {
        "./myHostApp": "./src/app",
      },
      shared: ["react", "react-dom"],
    }),
    // required if using external remotes
    // new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyPlugin({
      patterns: ["./public/config.json"],
    }),
  ],
};
