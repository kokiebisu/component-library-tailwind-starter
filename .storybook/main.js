module.exports = {
  stories: ["../lib/components/**/*.stories.[tj]sx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== "/\\.css$/"
    );

    config.module.rules.push({
      test: /\.css$/i,
      use: ["style-loader", "css-loader", "postcss-loader"],
    });

    config.resolve.mainFields = ["src", "main"];

    return config;
  },
};
