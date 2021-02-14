const path = require("path");

module.exports = {
  mode: "production",
  entry: "./lib/index.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    library: "component-library-tailwind-starter",
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: ["ts-loader"],
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
  externals: {
    react: "react",
  },
};
