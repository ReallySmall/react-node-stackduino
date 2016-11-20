import React, { Component, PropTypes } from 'react';
import {map} from "underscore";
import classNames from 'classnames/bind';
import styles from 'css/components/_repository-commits';
import { toDateString } from 'utilities/strings';

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
          {map(repoDetail, function(commit, i){
            if(commit.commit.committer.date && commit.commit.url && commit.commit.message){

              let date = toDateString(commit.commit.committer.date);

              return (
                <li key={i} className={cx('list-group-item')}>
                  <span className={cx('badge')}>
                    {date}
                  </span>
                  <a href={commit.html_url}>{commit.commit.message}</a>
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
