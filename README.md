# metalsmith-parcel

[![js-standard-style][standard-image]][standard-url]

A plugin for [Metalsmith][metalsmith] to use [Parcel][parcel] for bundling of assets.

## Install

You can either install by running yarn (recommended)

```bash
yarn add metalsmith-parcel
```

or use npm

```bash
npm install metalsmith-parcel --save
```

## Usage

```js
var parcel = require('metalsmith-parcel')

Metalsmith(__dirname)
  .use(parcel(file, options))
  .build()
```

### Options

See the [parcel api][parcel api] documentation for details. Watch default to **false** in this plugin as it is not suitable for the Metalsmith build process.

## Example

```js
Metalsmith(__dirname)
  .use(parcel('src/main.js', {
      watch: false
  }))
  .build()
```

## Versioning

We use [SemVer][semver] for versioning. For the versions available, see the [tags on this repository][tags].

## License

MIT License, see [LICENSE][license] for details.

[metalsmith]: http://www.metalsmith.io/
[parcel]: https://parceljs.org/
[parcel api]: https://parceljs.org/api.html
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: https://github.com/standard/standard
[semver]: http://semver.org/
[tags]: https://github.com/dahnielson/parcel-plugin-workbox/tags
[license]: https://github.com/dahnielson/metalsmith-parcel/blob/master/LICENSE.md
