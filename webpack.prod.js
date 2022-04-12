"use strict"
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require( "path" )
const common = require( "./webpack.config.js" )

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = Object.assign({}, common, {
    mode: "production",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "cookie-consent.js",
    },
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
          test: /\.(sa|sc|c)ss$/,
          use : [
            MiniCssExtractPlugin.loader,
            "css-loader", // translates CSS into CommonJS
            "postcss-loader",
            "sass-loader", // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ],
  },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin()
    ],
  })

