import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_repository-link';
import Icon from 'react-fa';
import RepositoryDataContainer from 'containers/RepositoryDataContainer';

const cx = classNames.bind(styles);

export default class RepositoryBlock extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    const { repoUrl, repoApiUrl } = this.props;

    return (
      <div>
        <h4>
          <a className={cx('primary-link')} href={repoUrl}>
            <Icon className={cx('icon')} name="download" />
            Download from GitHub
          </a>
        </h4>
        <p>Schematics, board files and Arduino code.</p>
        {repoApiUrl && 
          <div>
            <div className={cx('commit-list', 'clearfix')}>
              <h5 className={cx('panel-sub-header')}>Latest updates to this version</h5>
              <RepositoryDataContainer url={repoApiUrl} query="/commits?per_page=3">
              </RepositoryDataContainer>
            </div>
            <div>
              <h5 className={cx('panel-sub-header')}>Issue status</h5>
              <RepositoryDataContainer url={repoApiUrl} query="/issues?state=all">
              </RepositoryDataContainer>
            </div>
          </div>
        }
      </div>
    );

  }

};

RepositoryBlock.propTypes = {
};
