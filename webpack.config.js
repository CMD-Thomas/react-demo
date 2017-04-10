const webpack = require('webpack');
const path = require('path');
 
const PATHS = {
  app: './src/index.js',
  html: './src/index.html',
  dist: path.join(__dirname, 'dist')
};
 
module.exports = {
  entry: {
    javascript: PATHS.app,
    html: PATHS.html
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PATHS.dist
  },
  eslint: {
    emitWarning: true
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ["eslint-loader"],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      },
      { 
        test: /\.styl$/, 
        loader: 'style-loader!css-loader!stylus-loader' 
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  }
};