const path = require('path');
const nodeExternals = require('webpack-node-externals');
//const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  target: 'node',
  entry: path.resolve(__dirname,'../src/server/server.js'),
  output: {
      path: path.resolve(__dirname,'../dist/server'),
      filename: 'server.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },


  optimization: {
    minimize: false
  }
}
