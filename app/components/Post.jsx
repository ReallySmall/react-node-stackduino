import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-detail';
import DateBlock from 'components/DateBlock';

const cx = classNames.bind(styles);

export default class Post extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    const { title, publishedDate, content, categories } = this.props;

    console.log(this.props);

    let categoriesElement = [];

    for(let i = 0; i < categories.length; i++){
      let category = categories[i];
      categoriesElement.push(
        <li>
          <a href="#" title={"Find all posts tagged with" + category}>{category}</a>
        </li>
      );
    }

    return (
      <article className={cx('row')}>
        <div className={cx('col-sm-8')}>
          <section>
            <h1>{title}</h1>
            <DateBlock date={publishedDate} />
            <div dangerouslySetInnerHTML={{ __html: content.brief || '' }} />
            <div dangerouslySetInnerHTML={{ __html: content.extended || '' }} />
          </section>  
        </div>
        <div className={cx('col-sm-4', 'aside')}>
          <aside>
            <ul className={cx('tags')}>
              {categoriesElement}
            </ul>
          </aside>
        </div>
      </article>
    );

  }
};
