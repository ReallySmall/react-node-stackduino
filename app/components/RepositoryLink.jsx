/**
 * Repository Link
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_repository-link.scss';
import { Link } from 'react-router';
//var DoughnutChart = require("react-chartjs").Doughnut;

const cx = classNames.bind(styles);

export default class RepositoryLink extends Component {

  getInitialState() {
    return { 
      commits: null,
      issues: null
    };
  }

  componentDidMount() {

    let url_segments = this.props.repoUrl.split('/');
    let repo_id = $.trim(url_segments[url_segments.length-1]);
    let gitHubUrl = 'https://api.github.com/repos/reallysmall/';

    $.ajax({
      url: gitHubUrl + repo_id + "/commits?per_page=3",
      dataType: 'json',
      cache: true,
      success: function(data) {
        this.setState({commits: data});
        console.log(this.state.commits);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.repoUrl, status, err.toString());
      }.bind(this)
    });

    $.ajax({
      url: gitHubUrl + repo_id + "/issues?state=all",
      dataType: 'json',
      cache: true,
      success: function(data) {
        this.setState({issues: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.repoUrl, status, err.toString());
      }.bind(this)
    });

  }

  commitsList(){
    if (this.state.commits) {

      let commitList = [];

      if(this.state.commits.length === 0){
        return (
          <p>There are currently no commits for this board</p>
        )
      }

      for(var i = 0; i < this.state.commits.length; i++){
        commitList.push(
          <li className={cx('list-group-item')}>
            <span className={cx('badge')}>
              {this.state.commits[i].commit.committer.date}
            </span>
            <a href={this.state.commits[i].commit.url}>{this.state.commits[i].commit.message}</a>
          </li>
        );
      }

      return (
        <div>
          <ul className={cx('list-group', 'repo-commits', 'plain')}>
            {commitList}
          </ul>
        </div>
      )
    }

    return (
      <p><span className={cx('fa', 'fa-refresh', 'fa-spin')}> </span> Fetching recent updates...</p>
    );
  }

  issuesList(){
    if (this.state.issues) {

      if(this.state.issues.length === 0){
        return (
          <p>Currently no open issues for this board.</p>
        )
      }

      let closedIssues = [];
      let openIssues = [];
      
      for(var i = 0; i < this.state.issues.length; i++){
        if(this.state.issues[i].state === 'open'){
          openIssues.push(this.state.issues[i]);
        } else {
          closedIssues.push(this.state.issues[i]);
        }
      }

      let issueStats = [openIssues.length, closedIssues.length];

      return (
        <div className={cx('chart-container')}>
          <DoughnutChart data={issueStats} id="doughnut" className={cx('chart', 'chart-doughnut')} />
          <p>There are currently n issues open for this board.</p>
        </div>
      )
    }

    return (
      <p><span className={cx('fa', 'fa-refresh', 'fa-spin')}> </span> Fetching issues...</p>
    );
  }

  render() {

    let repositoryUrlLink;

    if(!this.props.repoUrl){
      repositoryUrlLink = (
        <p>There are no project files to view for this board.</p>        
      )
    } else {
      repositoryUrlLink = (
        <div>
          <h4>
            <a className={cx('repository-link')} href={this.props.repoUrl}>View on GitHub</a>
          </h4>
          <p>Download the most recent schematic, board files and Arduino code for Stackduino v2.2.</p>
          <div className={cx('commit-list', 'clearfix')}>
            <h5 className={cx('panel-sub-header')}>Latest updates to this version</h5>
            {this.commitsList()}  
          </div>
          <div>
            <h5 className={cx('panel-sub-header')}>Issue status</h5>
            {this.issuesList()}
          </div>
        </div>        
      )
    }

    return (
      <div className={cx('inset-wrapper')}>
        <section className={cx('panel', 'repository-link')}>
          <h3 className={cx('panel-header')}>Project files</h3>   
          {repositoryUrlLink}
        </section>
      </div>
    );

  }
  
}

RepositoryLink.propTypes = {
  repoUrl: PropTypes.string.isRequired
}
