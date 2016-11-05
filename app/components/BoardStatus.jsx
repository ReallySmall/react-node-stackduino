import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-status';

const cx = classNames.bind(styles);

export default class BoardStatus extends Component {

  render(){

    const { status } = this.props;

    let statuses = [
      {
        status: 'Code in development',
        description: 'Hardware complete, code implementation ongoing (help welcome with a pull request!)',
        htmlClass: 'board-active-dev',
        icon: 'flash'
      },
      {
        status: 'Complete',
        description: 'Hardware and code complete. No new development planned, however issues raised will be looked at',
        htmlClass: 'board-supported',
        icon: 'check'
      },
      {
        status: 'Closed prototype',
        description: 'Hardware issues or limitations identified. Unsupported and superceded by a more recent version',
        htmlClass: 'board-closed-proto',
        icon: 'ban'
      }
    ];

    return (
      <p className={cx('version-status', 'clearfix', statuses[status].htmlClass)}>
        <span className={cx('icon', 'fa', 'fa-' + statuses[status].icon)}></span> <abbr title={statuses[status].description}>{statuses[status].status}</abbr>
      </p>
    );
  }

}

BoardStatus.propTypes = {
  status: PropTypes.number.isRequired
};
