/**
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
    showToast: true, // 复制后是否toast提示 非必填，默认为true
    toastText: '复制成功', // toast提示文案 非必填，默认为：复制成功
    callback: () => {
      console.log('复制文本成功了~');
    }
  });
 **/

import React, {Component} from 'react';
import ClipboardJS from 'clipboard';
import Toast from '../Toast/index';
import './index.css'

export default class CopyText extends Component {

  constructor (props) {
    super(props);
    this.clipboard = new ClipboardJS('.copy-btn');
    this.state = {
      showToast: false, // toast提示
    }
  }

  componentWillMount () {
  }

  componentDidMount () {
    this.mounted = true; // 避免因为组件并没有装载上便开始执行setState({})
    let {copyConfig} = this.props;
    this.clipboard.on('success', (e) => {
      if (this.mounted) {
        copyConfig.showToast && this.showToast(copyConfig.toastText || '复制成功');
        copyConfig.callback && copyConfig.callback(); // 执行父组件回调函数
        e.clearSelection();
      }
    });
  }

  componentWillUnmount () {
    this.mounted = false;
  }

  // 提示信息配置
  toastConfig = {
    con: '',
    time: 1000,
    hideToast: () => {
      this.setState({
        showToast: false
      });
    }
  };

  // showToast
  showToast = (toastMsg) => {
    this.toastConfig.con = toastMsg;
    this.setState({
      showToast: true
    });
  };

  render () {
    let {showToast} = this.state;
    let {copyConfig} = this.props;
    return (
      <React.Fragment>
        <span className={`copy-btn ${copyConfig.className || ''}`}
          data-clipboard-text={copyConfig.copyText}>{copyConfig.buttonText}</span>

        {/* Toast提示 */}
        {
          showToast && <Toast {...this.toastConfig} />
        }
      </React.Fragment>
    )
  }
}
