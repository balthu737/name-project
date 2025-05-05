const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: path.resolve(__dirname, 'src', 'index.jsx'),
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
},
resolve: { extensions: ['.js', '.jsx'] },
module: {
    rules: [
    { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
    { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    { test: /\.(png|jpe?g|gif|svg)$/, type: 'asset/resource' }
    ]
},
plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })
],
devServer: {
    static: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    port: 3000,
    open: true,
    proxy: { '/api': 'http://localhost:3001' }
}
};
