import React from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_articles-page';
import ArticleTeaser from 'components/ArticleTeaser';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Articles = props => {

    var articles = [];

    for(var i = 0; i < props.boards.length; i++){
      articles.push(<BoardTeaser content={props.boards[i]} assets={props.assets}/>);
    }

  return (
    <div className={cx('view-animate-container')}>
        <div className={cx('container')}>
          <h1></h1>
          <p></p>
          {articles}
        </div>
      </div>
  );
};

export default Articles;
