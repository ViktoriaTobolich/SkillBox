const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NODE_ENV = "development";//process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';


function setupDevtool(){
  if(IS_PROD){
    return false;
  }
  if(IS_DEV){
    return 'eval';
  }
}


module.exports = {
  mode: NODE_ENV ? NODE_ENV: 'development',
 // devtool: "inline-source-map",
  entry:  [
    path.resolve(__dirname, '../src/client/index.jsx'),
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
  ],
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: [".ts",".js", ".jsx", ".json"],
    alias:{
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: "local",
              //auto: true,
              //exportGlobals: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
              // localIdentContext: path.resolve(__dirname, "src"),
              // localIdentHashSalt: "my-custom-hash",
              // namedExport: true,
              //exportLocalsConvention: "camelCase",
              //exportOnlyLocals: true
            }
          }
        }]
      }
    ]
  },
  devtool: setupDevtool(),
  plugins: IS_DEV
    ? [
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
  ]
  :[]
};
