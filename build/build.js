require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')    //一个在控制台提示的插件
var rm = require('rimraf')  //一个unix系统 rm -rf强制删除文件
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) { //打包运行后，执行的方法
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({   //打印到控制台
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
