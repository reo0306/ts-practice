const path = require('path');
const { Extension } = require('typescript');

module.exports = {
    mode: 'development',
    entry: './src/react.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
    resolve: {
        extensions: ['tsx', '.ts', '.js'],
    }
}