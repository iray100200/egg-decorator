# egg-decorator

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-decorator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-decorator
[travis-image]: https://img.shields.io/travis/eggjs/egg-decorator.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-decorator
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-decorator.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-decorator?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-decorator.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-decorator
[snyk-image]: https://snyk.io/test/npm/egg-decorator/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-decorator
[download-image]: https://img.shields.io/npm/dm/egg-decorator.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-decorator

<!--
Description here.
-->

## Install

```bash
$ npm i egg-decorator --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.decorator = {
  enable: true,
  package: 'egg-decorator',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.decorator = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
import { pretty } from 'egg-decorator'

@pretty()
class ExamController extends Controller {
  index() {
    return true
  }
  post() {
    return new Error('error-message')
  }
}

export default LibraryController

/*
 * index output: { success: true, data: true, errorCode: null, errorMsg: null }
 *  post output: { success: false, data: null, errorCode: -1, errorMsg: "error-message" }
 */

```

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
