import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_article-teaser';

const cx = classNames.bind(styles);

export default class CommitList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { repoDetail } = this.props;

    let commitsElement = [];

    for(var i = 0; i < repoDetail.length; i++){
      commitsElement.push(
        <li className={s['list-group-item']}>
          <span className={s['badge']}>
            {repoDetail[i].commit.committer.date}
          </span>
          <a href={repoDetail[i].commit.url}>{repoDetail[i].commit.message}</a>
        </li>
      );
    }

    return (
      <div className={cx('commit-list', 'clearfix')}>
        <h5 className={cx('panel-sub-header')}>Latest updates to this version</h5>
        {repoDetail.length &&
          <ul className={classNames(s['list-group'], s['repo-commits'], s['plain'])}>
            {commitList}
          </ul>
        }
        {!repoDetail || !repoDetail.length &&
          <p>No commits to show for this repo.</p>
        }
      </div>
    )

  }

}

CommitList.propTypes = {
  repoDetail: PropTypes.array.isRequired
};
