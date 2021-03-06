import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {map} from "underscore";
import classNames from 'classnames/bind';
import styles from 'css/components/_board-detail';
import DateBlock from 'components/DateBlock';
import ImageBlock from 'components/ImageBlock';
import FilterButtonContainer from 'containers/FilterButtonContainer';
import Contact from 'components/Contact';

const cx = classNames.bind(styles);

export default class Post extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    const { title, publishedDate, content, categories, images, tags, location } = this.props;

    let metaDescription = this.props.metaDescription || ''; 
    let tagList = [];

    for(let i = 0; i < tags.length; i++){
      tagList.push(tags[i].name);
    }

    return (
      <div>
        <Helmet 
          title={title} 
          meta={[
            {"name": "description", "content": metaDescription }
          ]}/>
        <div className={cx('col-sm-8')}>
          <article>
            <h2>{title}</h2>
            <div className={cx('clearfix', 'intro-block')}>
              <DateBlock date={publishedDate} />
            </div>
            {content && content.brief && <div dangerouslySetInnerHTML={{ __html: content.brief}} />}
            {content && content.extended && <div dangerouslySetInnerHTML={{ __html: content.extended}} />}
          </article>
          <aside>
            <FilterButtonContainer path="/articles" tags={tagList} title="Tags" icon="fa-tag" />
          </aside>
        </div>
        <div className={cx('col-sm-4', 'aside')}>
          <aside>
            <h2 className={cx('visually-hidden')}>Related content</h2>
            <ImageBlock images={images.slot1} />
            <Contact location={this.props.location.pathname} />
          </aside>
        </div>
      </div>
    );

  }
};
