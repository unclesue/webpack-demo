const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  name: 'webpack demo',
  mode: 'development',
  entry: {
    app: './src/app',
  },
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: resolve('dist'),
    hot: true,
    port: 8081,
    // open: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {'^/api' : ''}
    //   }
    // }
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(m?js|tsx?)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({ 
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
  ],
  output: {
    filename: '[name].[hash:8].js',
    path: resolve('dist'),
  },
}
