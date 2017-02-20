var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: "./bin/src/test1.js",
  output: {
    library: "commonjs",
    path: path.join(__dirname, "../App/js"),
    filename: "bundle.js"
  },
  externals: /^FuseJS/,
  module: {
    rules: [{
      loader: "source-map-loader",
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};
