import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import classNames from 'classnames/bind';
import styles from 'css/components/_repository-commits';

const cx = classNames.bind(styles);

export default class RepositoryCommits extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { repoDetail } = this.props;

    console.log(repoDetail);

    return (
      <div className={cx('commit-list', 'clearfix')}>
        <h5 className={cx('panel-sub-header')}>Latest updates to this version</h5>
        <ul className={cx('list-group', 'repo-commits', 'plain')}>

        </ul>
        {!repoDetail || !repoDetail.length &&
          <p>No commits to show for this repo.</p>
        }
      </div>
    )

  }

}

RepositoryCommits.propTypes = {
  repoDetail: PropTypes.array.isRequired
};
