const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = "development";//process.env.NODE_ENV;

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
    extensions: [".ts",".js", ".jsx", ".json"]
  },
  externals: [nodeExternals()],

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
        loader: "css-loader",
        options: {
          modules: {
            mode: "local",
            // auto: true,
            // exportGlobals: true,
            localIdentName: "[path][name]__[local]--[hash:base64:5]",
            // localIdentContext: path.resolve(__dirname, "src"),
            // localIdentHashSalt: "my-custom-hash",
            // namedExport: true,
            //exportLocalsConvention: "camelCase",
            exportOnlyLocals: true,
          },
        },
      },
    ]
  },


  optimization: {
    minimize: false
  }
}
