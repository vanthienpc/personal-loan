const path = require('path');
const { override, fixBabelImports, addBabelPlugins, addWebpackAlias } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins('babel-plugin-styled-components'),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    environment: path.join(__dirname, 'src', 'environments', process.env.NODE_ENV),
  }),
);
