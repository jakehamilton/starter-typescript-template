// @ts-check
var path = require('path');
var root = path.resolve(__dirname, '..');

module.exports = [
    path.resolve(root, 'package.json'),
    path.resolve(root, 'README.md'),
    path.resolve(root, 'docs', 'README.md'),
    path.resolve(root, 'webpack.node.config.js'),
    path.resolve(root, 'webpack.browser.config.js'),
];
