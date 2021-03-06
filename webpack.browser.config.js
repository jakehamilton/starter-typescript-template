// @ts-check
const path = require('path');

module.exports = {
    target: 'web',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lib.browser.js',
        library: '<%- package.library %>',
        libraryTarget: 'umd',
        globalObject: 'typeof self !== "undefined" ? self : this',
    },
    resolve: {
        extensions: [
            '.ts',
            '.js',
            '.json',
        ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.browser.json',
                        },
                    },
                ],
            },
        ],
    },
};
