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
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader"
      }
    ]
  }
};
