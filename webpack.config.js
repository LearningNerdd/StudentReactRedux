var path = require('path');

module.exports = {
  entry: ["babel-polyfill", './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
		rules: [
			{ 
				test: /\.(js|jsx)$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/,
				query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties'],
        }
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		],
	},
	devServer: {
    contentBase: path.resolve(__dirname, "dist")
  },
};