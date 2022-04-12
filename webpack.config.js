"use strict"
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require( "path" )

const config = {
  entry: path.resolve(__dirname, "src", "index.js"),
  target: ["web", "es5"],
  module: {
      rules: [
          {
            test: /\.js?$/,
            loader: "babel-loader",
            options: {
              root: __dirname
            },
            exclude: /node_modules/,
          },
          {
            test: /\.scss?$/,
            use : [
              MiniCssExtractPlugin.loader,
              "css-loader", // translates CSS into CommonJS
              "sass-loader", // compiles Sass to CSS, using Node Sass by default
            ]
          }
      ],
  }
}

module.exports = config

