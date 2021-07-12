const path = require('path');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, '../src/client/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
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
};
