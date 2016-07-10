import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-teaser';
import { Link } from 'react-router';
import BoardStatus from 'components/BoardStatus';
import DateBlock from 'components/DateBlock';
import Image from 'components/Image';
import Icon from 'react-fa';

const cx = classNames.bind(styles);

export default class BoardTeaser extends Component {

  constructor(props) {
    super(props);
  }

  render(){

    const { status, slug, title, intro, developedDate, images } = this.props;

    const statuses = [
      {
        status: 'Code in development',
        description: 'Hardware complete, code implementation ongoing (help welcome with a pull request!)',
        htmlClass: 'board-active-dev'
      },
      {
        status: 'Complete',
        description: 'Hardware and code complete. No new development planned, however issues raised will be looked at',
        htmlClass: 'board-supported'
      },
      {
        status: 'Closed prototype',
        description: 'Hardware issues or limitations identified. Unsupported and superceded by a more recent version',
        htmlClass: 'board-closed-proto'
      }
    ];

    const closed = status === 2 ? true : false;
    const colWidth = !closed ? 'col-sm-9' : 'col-sm-12';
    const thumbNailDisplay = !closed ? 'col-sm-3' : 'hidden';
    const dateText = status === 0 ? 'Development started' : 'Development completed';
    const img = images.length ? images[0] : null;

    return (
      <section className={cx('board', statuses[status].htmlClass)}>
        {closed && <Icon name="level-down" className={cx('col-sm-1', 'proto-indicator')} rotate="180" aria-hidden="true" />}
        <div className={cx('inset-wrapper', closed ? 'col-sm-11' : 'col-sm-12')}>
          <div className={cx('panel')}>
            <div className={cx('row')}>
              <div className={cx(colWidth)}>
                <div className={cx('clearfix', 'teaser-header')}>
                  <h2>
                    <Link to={'/boards/' + slug}>{title}</Link>
                  </h2>
                  <BoardStatus status={status} />
                  <DateBlock text={dateText} date={developedDate} />
                </div>
                {!closed && <p dangerouslySetInnerHTML={{ __html: intro || '' }} />}
              </div>
              <div className={cx(thumbNailDisplay)}>
                {img && <Link to={'/boards/' + slug} className={cx('image-link')}>
                  <Image src={img.url} alt="" ratio={(img.height / img.width) * 100} />
                </Link>}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

BoardTeaser.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  intro: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired
};
