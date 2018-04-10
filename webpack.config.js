const path = require('path');

const config = {
    entry  : './components/index.js',
    // mode   : 'development',
    output : {
      filename: 'main.js',
      path: path.resolve(__dirname, 'public')
    },

    module: {

      rules: [
        {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react'],
            "plugins": ["transform-object-rest-spread"]
          }
        }
      ]
    }
};

module.exports = config;