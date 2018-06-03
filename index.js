const Parcel = require('parcel-bundler')
const path = require('path')

module.exports = plugin

function plugin (file, options) {
  return function (files, metalsmith, done) {
    const bundler = new Parcel(path.join(metalsmith.directory(), file), options)
    bundler.bundle()
    return done()
  }
}
