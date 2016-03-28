import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_articles-page';
import PostTeaser from 'components/PostTeaser';

const cx = classNames.bind(styles);

export default class Posts extends Component {

  render(){

    var postList = [];

    for(var i = 0; i < this.props.list.length; i++){
      let post = this.props.list[i];
      postList.push(
        <PostTeaser 
          title={post.title}
          published={post.publishedDate}
          intro={post.content.brief}
          categories={post.categories} />
      );
    }

    return (
      <div className={cx('view-animate-container')}>
        <div className={cx('container')}>
          <h1>Articles</h1>
          {postList}
        </div>
      </div>
    );

  }

};
