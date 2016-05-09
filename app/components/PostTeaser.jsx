/** Article Teaser **/

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_article-teaser';
import DateBlock from 'components/DateBlock';
import { Link } from 'react-router';

const cx = classNames.bind(styles);

export default class PostTeaser extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { title, slug, intro, publishedDate, categories } = this.props;

    let categoriesElement = [];

    for(let i = 0; i < categories.length; i++){
      let category = categories[i];
      categories.push(
        <li>
          <a href="#" title={"Find all posts tagged with" + category}>{category}</a>
        </li>
      );
    }

    return (

      <article>
        <div className={cx('inset-wrapper')}>
          <div className={cx('panel')}>
            <div className={cx('teaser-header', 'clearfix')}>
              <h2>
                <Link to={"/articles/" + slug}>{title}</Link>
              </h2>
              <DateBlock date={publishedDate} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: intro || '' }} />
            <ul className={cx('tags')}>
              {categoriesElement}
            </ul>
          </div>
        </div>
      </article>

    );
  }

}

PostTeaser.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired
};
