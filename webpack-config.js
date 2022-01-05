var path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 4001,
    host: '0.0.0.0',
    allowedHosts: ['.cc-propeller.cloud'],
    publicPath: path.join(__dirname, 'dist'),
      }
}