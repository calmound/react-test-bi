const path = require("path");
const { Configuration }=  require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const config = {
  mode: "production",
  // devtool: 'source-map',
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|cur)(\?.*)?$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new CleanWebpackPlugin(),
     new BundleAnalyzerPlugin()
  ],
  optimization: {
    // minimize: false,
    usedExports: true,
    sideEffects: true,
    concatenateModules: false,
    splitChunks: {
      cacheGroups: {
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|lodash|sugar-design)[\\/]/,
            name: 'vendor-react',
            chunks: 'all',
          }
        }
    }
  }
};

module.exports = config