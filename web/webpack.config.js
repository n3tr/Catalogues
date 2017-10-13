const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    // compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { module: true, localIdentName: '[hash:base64:8]' }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, 'dist'),
        ],
        include: [
          path.resolve(__dirname, '..', 'docs'),
          path.resolve(__dirname, '..', 'src'),
          path.resolve(__dirname),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     dead_code: true,
    //     screw_ie8: true,
    //     warnings: false
    //   }
    // })
  ],
  resolve: {
    extensions: [ '.web.js', '.js' ],
    alias: {
      'catalogues': path.join(__dirname, '../src')
    },
  },
  devtool: 'eval-source-map'
};