/** Article Teaser **/

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_article-teaser';
import DateBlock from 'components/DateBlock';
import { Link } from 'react-router';
import ImageBlock from 'components/ImageBlock';

const cx = classNames.bind(styles);

export default class PostTeaser extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { title, slug, intro, publishedDate, categories, images } = this.props;

    return (

      <section>
        <div className={cx('inset-wrapper')}>
          <div className={cx('panel')}>
            <div className={cx('row')}>
              <div className={cx('col-md-9')}>
                <div className={cx('clearfix', 'teaser-header')}>
                  <h3>
                    <Link to={'/articles/' + slug}>{title}</Link>
                  </h3>
                  <DateBlock date={publishedDate} />
                </div>
                {<div dangerouslySetInnerHTML={{ __html: intro || '' }} />}
              </div>
              <div className={cx('col-md-3')}>
                <Link to={'/articles/' + slug} className={cx('image-link')}>
                  <ImageBlock images={images.slot1} captions="false" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }

}

PostTeaser.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired
};
