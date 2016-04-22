import React, { Component, PropTypes } from 'react';
import styles from 'css/components/_gallery-page';
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

    let isFetchingComponent = isFetching === true ? <Loading /> : null;
    let requestFailedComponent = requestFailed === true ? <Error message="Error loading images from Flickr :(" /> : null;

    return (
      <div className={cx('view')}>
        <div className={cx('container')}>
          <div className={cx('row')}>
            {this.props.children}
            {isFetchingComponent}
            {requestFailedComponent}
          </div>
        </div>
      </div>
    );

  }
};

Page.propTypes = {
};
