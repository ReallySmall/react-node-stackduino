/** Article Teaser **/

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_article-teaser';
import DateBlock from 'components/DateBlock';
import { Link } from 'react-router';
import Image from 'components/Image';

const cx = classNames.bind(styles);

export default class PostTeaser extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { title, slug, intro, publishedDate, categories, primaryImage } = this.props;

    return (

      <section>
        <div className={cx('inset-wrapper')}>
          <div className={cx('panel')}>
            <div className={cx('row')}>
              <div className={cx('col-md-9')}>
                <div className={cx('clearfix', 'teaser-header')}>
                  <h2>
                    <Link to={'/articles/' + slug}>{title}</Link>
                  </h2>
                  <DateBlock date={publishedDate} />
                </div>
                {<p dangerouslySetInnerHTML={{ __html: intro || '' }} />}
              </div>
              <div className={cx('col-md-3')}>
                {primaryImage && <Link to={'/articles/' + slug} className={cx('image-link')}>
                  <Image src={primaryImage.url} alt="" ratio={(primaryImage.height / primaryImage.width) * 100} />
                </Link>}
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
