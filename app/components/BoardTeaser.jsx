/**
 * Board Teaser
**/

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_board-teaser';
import { Link } from 'react-router';
import BoardStatus from 'components/BoardStatus';
import Carousel from 'components/Carousel';

const cx = classNames.bind(styles);

export default class BoardTeaser extends Component {
  
  constructor(props) {
    super(props);
  }

  propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired
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

    var colWidth = this.props.status !== '2' ? 'col-sm-9' : 'col-sm-12';
    var thumbNailDisplay = this.props.status !== '2' ? 'col-sm-3' : 'hidden';

    return (
      <section className={cx('board', statuses[this.props.status].htmlClass)}>
        <div className={cx('inset-wrapper')}>
          <div className={cx('panel')}>
            <div className={cx('row')}>
              <div className={cx(colWidth)}>
                <h2 className="">
                  <Link to={"/boards/" + this.props.version}>{this.props.title}</Link>
                </h2>
                <BoardStatus status={this.props.status} />
                <p>{this.props.intro}</p>
              </div>
              <div className={cx(thumbNailDisplay)}>
                <Carousel imageList={this.props.images} hideCaption={true} />
              </div>              
            </div>
          </div>
        </div>  
      </section>
    );
  }

}
