const path = require(`path`);

module.exports = {
	mode: `development`,
	devServer: {
		static: `./dist`,
	},
	devtool: `inline-source-map`,
	entry: `./src/index.js`,

	output: {
		filename: `main.js`,
		path: path.resolve(__dirname, `dist`),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [`style-loader`, `css-loader`],
			},
			{
				test: /\.(jpg|jpeg|gif)$/i,
				type: `asset/resource`,
			},
		],
	},
};
