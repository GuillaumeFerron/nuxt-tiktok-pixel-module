const path = require('path')

module.exports = function tiktokPixelModule (moduleOptions) {
  const defaults = {
    pixel: null,
    disabled: false
  }

  const options = Object.assign({}, defaults, this.options.tiktok, moduleOptions)

  if (!options.pixel) {
    throw new Error('The `pixel` option is required.')
  }

  this.addPlugin({
    src: path.resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options
  })
}

module.exports.meta = require('../package.json')
