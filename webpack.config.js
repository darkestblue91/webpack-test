const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: 'build/'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				
			},
			{
				use: ExtractTextPlugin.extract({
          			fallback: "style-loader",
          			use: "css-loader"
        		}),
				test: /\.css$/
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 40000
						}
					},
					'image-webpack-loader'
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("styles.css")
	]
};

module.exports = config;