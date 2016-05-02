import React, { Component, PropTypes } from 'react';
import styles from 'css/components/_page';
import Loading from 'components/Loading';
import Error from 'components/Error';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class Page extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    const { isFetching, requestFailed } = this.props;

    return (
      <div className={cx('page')}>
        <div className={cx('container')}>
          <div className={cx('col-md-12')}>
            {isFetching && <Loading size="3x" />}
            {requestFailed && <Error message="Loading error :(" />}
            {!requestFailed && !isFetching && this.props.children}
          </div>
        </div>
      </div>
    );

  }
};

Page.propTypes = {
};
