import React, { Component, PropTypes } from 'react';
import styles from 'css/components/_page';
import Loading from 'components/Loading';
import Error from 'components/Error';
import NotFoundContainer from 'containers/NotFoundContainer';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class Page extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    const { isFetching, fetchingMessage, errorMessage, connectionError, requestFailed } = this.props;

    return (
      <div className={cx('page')}>
        <div className={cx('container')}>
          <div className={cx('col-md-12')}>
            {this.props.children}
            {isFetching && !requestFailed && <Loading size="2x" message={fetchingMessage} />}
            {requestFailed && !connectionError && <NotFoundContainer />}
            {requestFailed && connectionError && <div className={cx('col-md-12')}><Error message={errorMessage} size="2x" /></div>}
          </div>
        </div>
      </div>
    );

  }
};

Page.propTypes = {
};
