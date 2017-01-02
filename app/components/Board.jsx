import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-detail';
import BoardStatus from 'components/BoardStatus';
import Carousel from 'components/Carousel';
import TextBlock from 'components/TextBlock';
import DateBlock from 'components/DateBlock';
import ImageBlock from 'components/ImageBlock';
import Contact from 'components/Contact';
import RepositoryBlock from 'components/RepositoryBlock';
import FilterButtonContainer from 'containers/FilterButtonContainer';

const cx = classNames.bind(styles);

export default class Board extends Component {

  constructor(props) {
    super(props);
  };

  filterPosts(event) {
    let value = event.target.value;
    this.props.dispatch( filterEvents({ type: this.props.type, value: value }) ); // send the new filter value to state
  };

  render() {

    const { title, version, boardStatus, developedDate, content, images, repoUrl, repoUserName, repoName, specification, location } = this.props;
    const dateText = boardStatus === 0 ? 'Development started' : 'Completed';

    return (
      <div>
        <Helmet title={'Version ' + version} />
        <div className={cx('col-sm-7')}>
          <article>
            <h2>{title}</h2>
            <div className={cx('clearfix')}>
              <BoardStatus status={boardStatus} />
            </div>
            {content && content.brief && <TextBlock content={content.brief} />}
            <Carousel images={images.slot1} />
            {content && content.extended && <TextBlock content={content.extended} />}
          </article>
          <aside>
            <FilterButtonContainer path="/articles" tags={['v' + version]} title="Tags" icon="fa-tag" />
          </aside>
        </div>
        <div className={cx('col-sm-5')}>
          <aside>
            <h2 className={cx('visually-hidden')}>Related content</h2>
            <div className={cx('inset-wrapper')}>
              <section className={cx('panel', 'repository-link')}>
                <h3 className={cx('panel-header')}>Project files</h3>
                <RepositoryBlock repoUrl={repoUrl} repoUserName={repoUserName} repoName={repoName} />
              </section>
            </div>
            <div className={cx('inset-wrapper')}>
              <section className={cx('panel', 'repository-link', 'spec-list')}>
                <h3 className={cx('panel-header')}>Specifications</h3>
                  {<div dangerouslySetInnerHTML={{ __html: specification || '' }} />}
              </section> 
            </div>
            <Contact location={this.props.location.pathname} />
          </aside>
        </div>
      </div>
    );

  }
};    

Board.propTypes = {
};
