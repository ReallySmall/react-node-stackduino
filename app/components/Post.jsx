import React, { Component, PropTypes } from 'react';
import {map} from "underscore";
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
      <div className={cx('row')}>
        <div className={cx('col-sm-8')}>
          <article>
            <div className={cx('clearfix')}>
              <h2>{title}</h2>
              <DateBlock date={publishedDate} />
            </div>
            {content && content.brief && <div dangerouslySetInnerHTML={{ __html: content.brief}} />}
            {content && content.extended && <div dangerouslySetInnerHTML={{ __html: content.extended}} />}
          </article>  
        </div>
        <div className={cx('col-sm-4', 'aside')}>
          <aside>
            <h2 className={cx('visually-hidden')}>Related content</h2>
            <ImageBlock images={images.slot1} />
            <ul className={cx('tags')}>
              {map(categories, function(category, i){
                return (
                  <li>
                    <a href="#" title={"Find all posts tagged with" + category}>{category}</a>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>
    );

  }
};
