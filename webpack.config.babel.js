import webpack from 'webpack' // eslint-disable-line
import path from 'path'

const PATHS = {
  dist: path.join(__dirname, 'dist'),
  src: path.join(__dirname, 'client'),
  fluxthis: path.join(__dirname, 'node_modules/fluxthis'),
}

const config = {
  entry: {
    main: path.join(PATHS.src, 'index.jsx'),
  },
  output: {
    path: PATHS.dist,
    filename: 'app.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6', '.es6.js', '.css'],
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$|\.es6.js$/,
        loaders: ['eslint'],
        include: [PATHS.src],
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: [PATHS.src],
      },
      {
        test: /\.jsx?$|\.es6.js/,
        loaders: ['babel-loader'],
        include: [PATHS.src, PATHS.fluxthis],
      },
    ],
  },
  devServer: {
    contentBase: PATHS.dist,
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    progress: true,
    stats: 'errors-only',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}

export default config
