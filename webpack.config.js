const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'js-tool.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'jsTool',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              /**
               * @babel/preset-env的作用
               * 1、转换语法syntax（const，箭头函数等）
               * 备注：配置项useBuiltIns用来告诉babel如何处理api（include，promise等）
               */
              ['@babel/preset-env']
            ],
            plugins: [
              [
                /**
                 * @babel/plugin-transform-runtime的作用
                 * 1、非兼容的api打包为从一个统一的模块中引入，避免了对全局变量及其原型链的污染
                 * 2、helpers（babel自己定义的辅助函数）打包为从一个统一的模块中引入，使得打包的结果中每个helper只会存在一个
                 */
                '@babel/plugin-transform-runtime',
                {
                  corejs: 3 // 转化API的配置项，与@babel/preset-env的useBuiltIns不能同时配置（原因见：https://github.com/babel/babel/issues/10271#issuecomment-528379505）
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({ // 可视化资源分析
      analyzerMode: 'static',
      reportFilename: 'analyzer-report.html',
      openAnalyzer: false
    })
  ]
}
