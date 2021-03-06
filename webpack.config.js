const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  name: 'webpack demo',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    publicPath: '/',
    contentBase: resolve('dist'),
    hot: true,
    port: 8080,
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
  // entry: {
  //   app: './src/app',
  // },
  entry: ['@babel/polyfill', './src/app'],
  output: {
    filename: 'js/[name].[hash].js',
    path: resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 2 },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true }},
        ],
      },
      {
        test: /\.(m?js|tsx?)$/,
        // exclude: /(node_modules|bower_components)/,
        include: [resolve('src'), resolve('node_modules/@antv/g6')],
        use: { loader: 'babel-loader?cacheDirectory' },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
          fallback: 'file-loader',
          name: 'img/[name].[hash].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)$/i,
        loader: 'file-loader',
        options: { name: 'fonts/[name].[hash].[ext]' },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new MiniCssExtractPlugin({ filename: 'css/[name].[hash].css' }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000, // ?????????????????????
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10, // ?????????
          chunks: 'initial',
        },
        commons: {
          name: 'chunk-commons',
          test: resolve('src/components'),
          minChunks: 3, // ???????????????
          priority: 5,
          reuseExistingChunk: true,
        },
      },
    },
  },
}
