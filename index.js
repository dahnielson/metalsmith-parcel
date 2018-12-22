const Parcel = require('parcel-bundler')

module.exports = plugin

function plugin (file, options = { watch: false }) {
  return function (files, metalsmith, done) {
    const bundler = new Parcel(file, options)
    bundler.bundle()
    return done()
  }
}
