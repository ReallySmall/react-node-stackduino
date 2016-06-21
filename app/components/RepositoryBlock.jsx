import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_repository-link';
import Icon from 'react-fa';
import RepositoryDataContainer from 'containers/RepositoryDataContainer';
import RepositoryCommits from 'components/RepositoryCommits';

const cx = classNames.bind(styles);

export default class RepositoryBlock extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    const { repoUrl, repoUserName, repoName } = this.props;

    return (
      <div>
        {repoUrl &&
          <div>
            <h4>
              <a className={cx('primary-link')} href={repoUrl}>
                <Icon className={cx('icon')} name="download" />
                Download from GitHub
              </a>
            </h4>
            <p>Schematics, board files and Arduino code.</p>
            <RepositoryDataContainer repoInfoType="commits" repoUserName={repoUserName} repoName={repoName}>
              <RepositoryCommits repoDetail="" />
            </RepositoryDataContainer>
            <RepositoryDataContainer repoInfoType="issues" repoUserName={repoUserName} repoName={repoName}>
            </RepositoryDataContainer>
          </div>
        }
        {!repoUrl &&
          <h4>No files available for this project</h4>
        }
      </div>
    );

  }

};

RepositoryBlock.propTypes = {
};
