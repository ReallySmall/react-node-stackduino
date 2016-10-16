import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-detail';
import DateBlock from 'components/DateBlock';
import ImageBlock from 'components/ImageBlock';

const cx = classNames.bind(styles);

export default class Post extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    const { title, publishedDate, content, categories, images } = this.props;

    return (
      <article className={cx('row')}>
        <div className={cx('col-sm-8')}>
          <section>
            <div className={cx('clearfix')}>
              <h1>{title}</h1>
              <DateBlock date={publishedDate} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: content.brief || '' }} />
            <div dangerouslySetInnerHTML={{ __html: content.extended || '' }} />
          </section>  
        </div>
        <div className={cx('col-sm-4', 'aside')}>
          <aside>
            <ImageBlock images={images.slot1} />
            <ul className={cx('tags')}>
              {_.map(categories, function(category, i){
                return (
                  <li>
                    <a href="#" title={"Find all posts tagged with" + category}>{category}</a>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </article>
    );

  }
};
