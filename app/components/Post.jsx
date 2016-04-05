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
      <div className={cx('view-animate-container')}>
        <div className={cx('container')}>
          <div className={cx('row')}>
            <div className={cx('col-sm-8')}>
              <article>
                <section>
                  <h1>{this.props.title}</h1>
                  <p>{this.props.publishedDate}</p>
                  <p>{this.props.intro}</p>
                </section>
                <section>
                  {this.props.body}
                </section>  
              </article>
            </div>
            <div className={cx('col-sm-4')}>
              <ul className={cx('tags')}>
                {categories}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

  }
};
