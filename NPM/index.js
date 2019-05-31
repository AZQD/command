// import qs from 'qs';
const qs = require('qs');

/**
 * 获取URL链接参数Object
 */
function urlQuery () {
  console.log('当前路由页面参数：', qs.parse(window.location.search, {ignoreQueryPrefix: true}));
  return qs.parse(window.location.search, {ignoreQueryPrefix: true});
}

module.exports = {
  consoleFun: function (str) {
    console.log(str);
  },
  TextNode: 'This is my first NPM project',
  urlQuery
};