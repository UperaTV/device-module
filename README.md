# @nuxtjs/device

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![License][license-src]][license-href]
[![Standard JS][standard-js-src]][standard-js-href]
[![nuxt-device-detect Dev Token](https://badge.devtoken.rocks/nuxt-device-detect)](https://devtoken.rocks/package/nuxt-device-detect)

This module injects flags that indicate a device type into the context and the component instance.

## Setup

 - Add `@nuxtjs/device` to depedency using yarn or npm to your project
 - Add `@nuxtjs/device` to modules section of nuxt.config.js

```js
{
  modules: [
   '@nuxtjs/device',
  ]
}
```

### Options

`defaultUserAgent` option can be used for `npm run generate`.

```js
{
  modules: [
    [
      '@nuxtjs/device',
      {defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36'}
    ]
  ]
}
```

## Added flags

You can use these flags to detect the device type.

```js
context.isTV
context.isIos
context.isWindows
context.isMacOS
context.isAndroid

instance.$device.isTV
instance.$device.isIos
instance.$device.isWindows
instance.$device.isMacOS
instance.$device.isAndroid
```


## License

[MIT License](./LICENSE)


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@nuxtjs/device.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/device

[npm-downloads-src]: https://img.shields.io/npm/v/@nuxtjs/device/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/device

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/device-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/device-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/device-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/device-module

[david-dm-src]: https://david-dm.org/nuxt-community/device-module/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/nuxt-community/device-module

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com

[license-src]: https://img.shields.io/npm/l/@nuxtjs/device.svg?style=flat-square
[license-href]: https://npmjs.com/package/@nuxtjs/device

