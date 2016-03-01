/** Article Teaser **/

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_article-teaser';
import { Link } from 'react-router';

const cx = classNames.bind(styles);

export default class ArticleTeaser extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var tags = [];

    for(var i = 0; i < this.props.tags.length; i++){
      var tag = this.props.tags[i];
      tags.push(
        <li>
          <a href="#" title={"Find all articles tagged with" + tag}>{tag}</a>
        </li>
      );
    }

    return (

      <article>
        <h2>
          {this.props.title}
        </h2>
        <p>{this.props.summary}</p>
        <ul className={cx('tags')}>
          {tags}
        </ul>
      </article>

    );
  }

}

ArticleTeaser.propTypes = {
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};
