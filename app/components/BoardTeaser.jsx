import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-teaser';
import { Link } from 'react-router';
import BoardStatus from 'components/BoardStatus';
import DateBlock from 'components/DateBlock';
import Image from 'components/Image';

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

    const img = images.slot1;
    const closed = status === 2 ? true : false;
    const colWidth = !closed ? 'col-sm-9' : 'col-sm-12';
    const thumbNailDisplay = !closed && img.length ? 'col-sm-3' : 'hidden';
    const dateText = status === 0 ? 'Development started' : 'Development completed';

    return (
      <section className={cx('board', statuses[status].htmlClass)}>
        {closed && <span className={cx('col-sm-1', 'proto-indicator', 'fa', 'fa-level-down')} aria-hidden="true" />}
        <div className={cx('inset-wrapper', closed ? 'col-sm-11' : 'col-sm-12')}>
          <div className={cx('panel')}>
            <div className={cx('row')}>
              <div className={cx(colWidth)}>
                <div className={cx('clearfix', 'teaser-header')}>
                  <h3>
                    <Link to={'/boards/' + slug}>{title}</Link>
                  </h3>
                  <div className={cx('clearfix')}>
                    <BoardStatus status={status} />
                    <DateBlock text={dateText} date={developedDate} />
                  </div>
                </div>
                {!closed && <div dangerouslySetInnerHTML={{ __html: intro || '' }} />}
              </div>
              <div className={cx(thumbNailDisplay)}>
                {img.length && <Link to={'/boards/' + slug} className={cx('image-link')}>
                  <Image src={img[0].image.url} alt={img[0].alt} ratio={(img[0].image.height / img[0].image.width) * 100} />
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
  intro: PropTypes.string.isRequired
};
