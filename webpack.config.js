const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./lib/index.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-react"], "@babel/preset-env"],
            // preset-react
            // Enables the use of JSX

            // preset-env
            // Enables the use of ES2015 ~
            plugins: ["@babel/plugin-transform-runtime"], // enable async await syntax
          },
        },
      },
      // {
      //   test: /\.tsx$/,
      //   use: "ts-loader",
      //   exclude: [/\.stories.tsx/, /node_modules/],
      // },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
