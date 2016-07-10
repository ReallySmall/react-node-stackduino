import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import classNames from 'classnames/bind';
import styles from 'css/components/_repository-commits';
var DoughnutChart = require("react-chartjs").Doughnut;

const cx = classNames.bind(styles);

export default class RepositoryCommits extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { repoDetail } = this.props;

    console.log(repoDetail);

    let closedIssues = [];
    let openIssues = [];

    _.map(repoDetail, function(issue, i){
        if(issue.state === 'open'){
          openIssues.push(issue);
        } else {
          closedIssues.push(issue);
        }
    });

    let issueStats = [openIssues.length, closedIssues.length];

    return (
      <div className={cx('commit-list', 'clearfix')}>
        <h5 className={cx('panel-sub-header')}>Issue status</h5>
        {repoDetail && openIssues.length &&
          <div className={cx('chart-container')}>
            <DoughnutChart data={issueStats} id="doughnut" className={cx('chart', 'chart-doughnut')} />
            <p>There are currently {openIssues.length} issues open for this board.</p>
          </div>
        }
        {!repoDetail || !openIssues.length &&
          <p>No issues to show for this repo.</p>
        }
      </div>
    )

  }

}

RepositoryCommits.propTypes = {
  repoDetail: PropTypes.array.isRequired
};
