import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import moment from 'moment';
import classNames from 'classnames/bind';
import styles from 'css/components/_repository-commits';

const cx = classNames.bind(styles);

export default class RepositoryCommits extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { repoDetail } = this.props;

    return (
      <div className={cx('commit-list', 'clearfix', 'no-script-hide')}>
        <h5 className={cx('panel-sub-header')}>Latest updates to this version</h5>
        <ul className={cx('list-group', 'repo-commits', 'plain')}>
          {_.map(repoDetail, function(commit, i){
            if(commit.commit.committer.date && commit.commit.url && commit.commit.message){
              return (
                <li key={i} className={cx('list-group-item')}>
                  <span className={cx('badge')}>
                    {moment(commit.commit.committer.date).format('MMMM Do YYYY')}
                  </span>
                  <a href={commit.commit.url}>{commit.commit.message}</a>
                </li>
              )
            }
          })}
        </ul>
        {!repoDetail || !repoDetail.length &&
          <p>No commits to show for this repo.</p>
        }
      </div>
    )

  }

}
