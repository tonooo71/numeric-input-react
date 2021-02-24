module.exports = [
  {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
      filename: "index.js"
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".json", ".mjs", ".wasm"],
    },
  },
];
