const webpack = require("webpack");

module.exports = (config) => {
  config.resolve.extensions = [".sketch.js", ".ts", ".tsx", ".js", ".jsx"];
  config.module.rules.push({
    test: /\.(html)$/,
    use: [
      {
        loader: "@skpm/extract-loader",
      },
      {
        loader: "html-loader",
        options: {
          attrs: ["img:src", "link:href"],
          interpolate: true,
        },
      },
    ],
  });
  config.module.rules.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
      plugins: ["transform-react-jsx"],
    },
  });
  config.module.rules.push({
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  });
  config.module.rules.push({
    test: /\.(png|jpg)$/,
    use: "url-loader",
    exclude: /node_modules/,
  });
  config.module.rules.push({
    test: /\.(css)$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
      },
    ],
  });

  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    })
  );
};
