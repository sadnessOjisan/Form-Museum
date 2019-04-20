const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const env = process.env.BUILD_MODE;

module.exports = {
  mode: env || "development",
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css/,
        use: ["style-loader", { loader: "css-loader", options: { url: false } }]
      },
      {
        test: /\.(png|jpg|gif|mp4)$/,
        use: [
          {
            loader: "url-loader",
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css", ".gif", "jpg", "png", "mp4"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true
  }
};
