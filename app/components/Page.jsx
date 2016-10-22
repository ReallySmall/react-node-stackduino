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

    const { isFetching, fetchingMessage, requestFailed, requestFailedMessage } = this.props;

    return (
        <div className={cx('page')}>
          <div className={cx('container')}>
            <div className={cx('col-md-12')}>
              {this.props.children}
              {isFetching && !requestFailed && <Loading size="2x" message={fetchingMessage} />}
              {requestFailed && <Error size="2x" message={requestFailedMessage} />}
            </div>
          </div>
        </div>
    );

  }
};

Page.propTypes = {
};
