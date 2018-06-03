# metalsmith-parcel

[Parcel][parcel] plugin for [Metalsmith][metalsmith].

## Installation

```bash
yarn add metalsmith-parcel
```

## Usage

```js
var parcel = require('metalsmith-parcel')

Metalsmith(__dirname)
  .use(parcel(file, options))
  .build()
```

### Options

See the [parcel api][parcel api] documentation for details.

## Example

```js
Metalsmith(__dirname)
  .use(parcel('src/main.js', {
      watch: false
  }))
  .build()
```

## License

MIT License, see [LICENSE](https://github.com/dahnielson/metalsmith-parcel/blob/master/LICENSE.md) for details.

[metalsmith]: http://www.metalsmith.io/
[parcel]: https://parceljs.org/
[parcel api]: https://parceljs.org/api.html