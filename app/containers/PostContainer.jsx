import React from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_article-detail';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Article = props => {

  return (
    <div className={cx('view-animate-container')}>
        <div className={cx('container')}>
          <h1></h1>
          <p></p>
        </div>
      </div>
  );
};

export default Article;
