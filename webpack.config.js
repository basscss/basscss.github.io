
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')

var routes = data.routes.map(function(route) {
  return route.path
})

module.exports = {
  entry: {
    docs: './docs',
    404: './404'
  },

  output: {
    filename: '[name].bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx$)/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, exclude: /^colors\.css/, loader: 'css-loader!cssnext-loader' },
      { test: /\.png$/, loader: 'file-loader?name=/images/[hash].[ext]' }
    ]
  },

  cssnext: {
    compress: true,
    features: {
      colorRgba: false,
      rem: false,
    }
  },

  plugins: [
    new StaticSiteGeneratorPlugin('docs.bundle.js', routes, data),
    new StaticSiteGeneratorPlugin('404.bundle.js', ['/404'], data),
  ]
}
