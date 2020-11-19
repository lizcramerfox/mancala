const HtmlWebPackPlugin = require("html-webpack-plugin");
const paths = require('./config/paths')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {loader: "babel-loader"},
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader"},
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        exclude: /node_modules/,
        use: [
          {loader: "file-loader"},
        ]
      }
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
  ],
};
