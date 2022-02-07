const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
	entry: "./src/client/index.js",
	mode: "production",
	module: {
		rules: [
			{
				test: "/.js$/",
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
			minify: {
				removeComments: true,
				removeAttributeQuotes: true,
				collapseWhitespace: true,
			},
		}),
		new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
		new WorkboxPlugin.GenerateSW(),
	],
	optimization: {
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
};
