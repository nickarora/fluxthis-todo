import webpack from 'webpack' // eslint-disable-line
import path from 'path'

const PATHS = {
  dist: path.join(__dirname, 'dist'),
  src: path.join(__dirname, 'client'),
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
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [PATHS.src],
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: [PATHS.src],
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
