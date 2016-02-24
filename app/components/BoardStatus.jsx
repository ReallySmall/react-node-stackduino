/**
 * Board Status
**/

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_board-status';

const cx = classNames.bind(styles);

class BoardStatus extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {

    var statuses = [
      {
        status: "Code in development",
        description: "Hardware complete, code implementation ongoing (help welcome with a pull request!)",
        htmlClass: "board-active-dev"
      },
      {
        status: "Complete",
        description: "Hardware and code complete. No new development planned, however issues raised will be looked at",
        htmlClass: "board-supported"
      },
      {
        status: "Closed prototype",
        description: "Hardware issues or limitations identified. Unsupported and superceded by a more recent version",
        htmlClass: "board-closed-proto"
      }
    ];

    return (
      <div className={cx('clearfix')}>
        <p className={cx('version-status', statuses[this.props.status].htmlClass)}>
          <span className={cx('fa', 'fa-flash')}></span> 
          <abbr title={statuses[this.props.status].description}>{statuses[this.props.status].status}</abbr>
        </p>
      </div>
    );
  }

}

BoardStatus.propTypes = {
  status: PropTypes.string.isRequired,
};
