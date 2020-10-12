const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const APP_PATH = path.resolve(__dirname, 'src');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const config = {
  entry: APP_PATH,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    contentBase: './dist',
    port: 4000
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', 'less']
  },
  module: {
    rules: [{
        test: /\.(ts|js)x?$/,
        // exclude: /node_modules/,
        loader: 'babel-loader',
    },
    {
      test: /\.css$/,
      include: /node_modules/,
      use: [
        {
          loader: 'style-loader'
      },
      {
          loader: 'css-loader'
      },
    ]
    },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          require.resolve('style-loader'),
          {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                modules: true
              },
          },
          {
            loader: 'typed-css-modules-loader',
            options: {
                camelCase: false
            }
          },
          {
              loader: require.resolve('postcss-loader')
          },
          {
            loader: require.resolve('less-loader'), // compiles Less to LESS
            options: {
              importLoaders: 2,
              modules: true,   
              getLocalIdent: getCSSModuleLocalIdent,
            },
          },
          
      ],
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: path.join(APP_PATH, 'index.html') }),
    new ForkTsCheckerWebpackPlugin(),
  ]
};

module.exports = config;
