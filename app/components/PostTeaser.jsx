/** Article Teaser **/

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_article-teaser';
import { Link } from 'react-router';

const cx = classNames.bind(styles);

export default class PostTeaser extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var categories = [];

    for(var i = 0; i < this.props.categories.length; i++){
      var category = this.props.categories[i];
      categories.push(
        <li>
          <a href="#" title={"Find all posts tagged with" + category}>{category}</a>
        </li>
      );
    }

    return (

      <article>
        <h2>
          {this.props.title}
        </h2>
        <p>{this.props.publishedDate}</p>
        <p>{this.props.intro}</p>
        <ul className={cx('tags')}>
          {categories}
        </ul>
      </article>

    );
  }

}

PostTeaser.propTypes = {
  title: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired
};
