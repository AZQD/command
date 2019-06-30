'use strict';

var _index = require('./CopyText/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import qs from 'qs';
var qs = require('qs');


/**
 * 获取URL链接参数Object
 */
function urlQuery() {
  console.log('当前路由页面参数：', qs.parse(window.location.search, { ignoreQueryPrefix: true }));
  return qs.parse(window.location.search, { ignoreQueryPrefix: true });
}

module.exports = {
  consoleFun: function consoleFun(str) {
    console.log(str);
  },
  TextNode: 'This is my first NPM project',
  urlQuery: urlQuery,
  CopyText: _index2.default
};