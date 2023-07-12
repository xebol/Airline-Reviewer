// const { environment } = require('@rails/webpacker')

// module.exports = environment
const { environment } = require('@rails/webpacker');
const webpack = require('webpack');

environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
  React: 'react',
  ReactDOM: 'react-dom',
}));

module.exports = environment;
