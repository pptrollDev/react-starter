const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, options) =>{
    return {
        mode: options.mode,
        entry: {
            app: path.join(__dirname, 'src', 'index.tsx'),
        },
        output: {
            filename: "[name].[chunkhash].js",
            chunkFilename: "[name].[chunkhash].js",
            path: path.resolve(__dirname, "build")
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.jsx?/,
                    exclude: /node_module/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['@babel/proposal-class-properties'],
                        },
                    },
                },
                {
                    test: /\.(ts|tsx)$/,
                    use: ['ts-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
            ],
        },
        devServer: {
            contentBase: path.join(__dirname, "./build/"),
            port: 8000,
            historyApiFallback: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: "./index.html",
                templateParameters: {
                    env: options.mode === 'production' ? '' : 'dev',
                },
                minify:
                    options.mode === 'production'
                        ? {
                            collapseWhitespace: true,
                            removeComments: true,
                        }
                        : false,
            }),
            new BundleAnalyzerPlugin()
        ],
    };
}
