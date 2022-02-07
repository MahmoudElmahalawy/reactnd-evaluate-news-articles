const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
	entry: "./src/client/index.js",
	mode: "development",
	devtool: "source-map",
	stats: "minimal",
	module: {
		rules: [
			{
				test: "/.js$/",
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8000,
							name: "images/[name]-[hash].[ext]",
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/client/views/index.html",
			filename: "./index.html",
		}),
		new CleanWebpackPlugin({
			dry: true,
			verbose: true,
			cleanStaleWebpackAssets: true,
			protectWebpackAssets: false,
		}),
		new WorkboxPlugin.GenerateSW(),
	],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
};
