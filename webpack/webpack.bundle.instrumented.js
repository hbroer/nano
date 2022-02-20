const path = require('path')

module.exports = {
  mode: 'development',
  stats: 'errors-warnings',
  devtool: 'source-map',
  entry: './lib/bundles/bundle.full.js',
  output: {
    filename: 'nano.instrumented.min.js',
    path: path.resolve(__dirname, '../bundles'),
    library: 'nanoJSX',
    libraryExport: 'default'
  },
  resolve: {
    extensions: ['.js']
  }
}
