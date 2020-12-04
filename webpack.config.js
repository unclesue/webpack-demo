const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  name: 'webpack demo',
  mode: 'development',
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
  entry: {
    app: './src/app',
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: resolve('dist'),
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
        use: { loader: 'babel-loader?cacheDirectory' },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash:8].[ext]'
        }
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
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000, // 模块的最小体积
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10, // 优先级
          chunks: 'initial'
        },
        commons: {
          name: 'chunk-commons',
          test: resolve('src/components'),
          minChunks: 3, // 被引用次数
          priority: 5,
          reuseExistingChunk: true
        },
      }
    }
  }
}
