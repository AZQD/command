'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clipboard = require('clipboard');

var _clipboard2 = _interopRequireDefault(_clipboard);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 复制文本组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 1.引入：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    import CopyText from '@src/common/CopyText/index';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 2.应用：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    <CopyText copyConfig={this.copyConfig('我是复制的文本')} />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 3.参数配置：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  copyConfig = (copyText) => ({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   clickLog: 'tz_detail_SQpopclick', // 复制文本埋点 // 非必填，默认为空
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   copyText: copyText, // 必填，要复制的文本
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   buttonText: '点我复制', // 非必填，默认为：复制
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   className: 'right', // 非必填，默认为空
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   callback: () => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     console.log('复制文本成功了~');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                **/

var CopyText = function (_Component) {
  _inherits(CopyText, _Component);

  function CopyText(props) {
    _classCallCheck(this, CopyText);

    var _this = _possibleConstructorReturn(this, (CopyText.__proto__ || Object.getPrototypeOf(CopyText)).call(this, props));

    _this.clipboard = new _clipboard2.default('.copy-btn');
    _this.state = {};
    return _this;
  }

  _createClass(CopyText, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.mounted = true; // 避免因为组件并没有装载上便开始执行setState({})
      var copyConfig = this.props.copyConfig;

      this.clipboard.on('success', function (e) {
        if (_this2.mounted) {
          copyConfig.callback && copyConfig.callback(); // 执行父组件回调函数
          e.clearSelection();
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var copyConfig = this.props.copyConfig;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'span',
          { className: 'copy-btn ' + (copyConfig.className || ''),
            'data-clipboard-text': copyConfig.copyText },
          copyConfig.buttonText
        )
      );
    }
  }]);

  return CopyText;
}(_react.Component);

exports.default = CopyText;