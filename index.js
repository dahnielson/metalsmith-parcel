const Parcel = require('parcel-bundler');
const path = require('path');

module.exports = plugin;

function plugin(file, options) {
    const bundler = new Parcel(path.join(__dirname, file), options)
    return function(files, metalsmith, done) {
        bundler.bundle();
        return done();
    };
}
