/* put any customisations to the default create-react-app webpack config here */
/* see https://craco.js.org/docs/configuration/getting-started/ */

const {
    whenDev,
  } = require('@craco/craco');

const CircularDependencyPlugin = require('circular-dependency-plugin')
const SpeadMeasureWebpackPlugin = require("speed-measure-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; 

module.exports = {
    webpack: {
      plugins: whenDev(() => [
        new SpeadMeasureWebpackPlugin(),
        new CircularDependencyPlugin(),
        new BundleAnalyzerPlugin() // view the analysis at http://localhost:8888
      ], [])
    },
  };