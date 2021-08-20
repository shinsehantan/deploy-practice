import * as path from "path";
import * as webpack from "webpack";
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config: webpack.Configuration = {
  mode: "development",
  entry: "/src/index.tsx",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "/index.html",
    }),
  ],
  output: {
    publicPath: "",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
};

export default config;
