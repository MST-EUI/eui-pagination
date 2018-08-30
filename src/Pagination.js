import React from 'react';
import RcPagination from 'rc-pagination';
import classnames from 'classnames';
// import i18n from './i18n';

import './style/index.scss';

const { PropTypes } = React;

export default class Pagination extends React.Component {
  static propTypes = {
    // locale: PropTypes.string,
    prefixCls: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    // locale: 'zh-cn',
    prefixCls: 'eui-pagination',
    className: '',
  };

  render() {
    const {
      prefixCls,
      // locale,
      className,
      ...others
    } = this.props;
    console.log(others);

    const classes = classnames(
      prefixCls,
      className,
      { [`${prefixCls}-mini`]: this.props.size === 'small' },
    );

    return (
      <RcPagination
        className={classes}
        prefixCls={prefixCls}
        {...others}
      />
    );
  }
}
