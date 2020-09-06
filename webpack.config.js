const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    include: [/components/, /stories/],
    //
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require.resolve("@babel/preset-react"),
            require.resolve("@babel/preset-typescript"),
          ],
        },
      },
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: { parser: "typescript" },
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../"),
  });

  config.resolve.extensions.push(".ts", ".tsx");

  // config.plugins.push(
  //   new ForkTsCheckerWebpackPlugin({
  //     async: false,
  //     checkSyntacticErrors: true,
  //     formatter: require('react-dev-utils/typescriptFormatter'),
  //     memoryLimit: 8192,
  //     workers: 1,
  //     useTypescriptIncrementalApi: true
  //   })
  // )

  return config;
};
