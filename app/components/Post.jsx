import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-detail';

const cx = classNames.bind(styles);

export default class Post extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    let categories = [];

    for(let i = 0; i < this.props.categories.length; i++){
      let category = this.props.categories[i];
      categories.push(
        <li>
          <a href="#" title={"Find all posts tagged with" + category}>{category}</a>
        </li>
      );
    }

    return (
      <article>
        <div className={cx('col-sm-8')}>
          <section>
            {this.props.body}
          </section>  
        </div>
        <div className={cx('col-sm-4', 'aside')}>
          <aside>
            <ul className={cx('tags')}>
              {categories}
            </ul>
          </aside>
        </div>
      </article>
    );

  }
};
