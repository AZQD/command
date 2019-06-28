/**
 * 本组件为同镇项目使用的公共toast组件
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Toast extends PureComponent {
    static defaultProps = {
      time: 2000,
      hideToast: () => {},
      classStyle: '',
    }
    constructor (props) {
      super(props);
      this.state = {
        time: this.props.time
      };
    }

    componentDidMount () {
      const { time } = this.state;
      const { hideToast } = this.props;
      let timer = setTimeout(() => {
        clearTimeout(timer)
        hideToast();
      }, time);
    }

    render () {
      const { con, classStyle } = this.props;
      return <div className="toast-outer-wrap"><div className={'toast_com_wrap ' + classStyle} dangerouslySetInnerHTML={{ __html: con}}></div></div>;
    }
}

Toast.propTypes = {
  con: PropTypes.string.isRequired,
  time: PropTypes.number,
  classStyle: PropTypes.string
};

export default Toast;
