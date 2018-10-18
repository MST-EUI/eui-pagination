import React from 'react';
import RcPagination from 'rc-pagination';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style/index.scss';

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
