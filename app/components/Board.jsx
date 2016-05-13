import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-detail';
import BoardStatus from 'components/BoardStatus';
import Carousel from 'components/Carousel';
import TextBlock from 'components/TextBlock';
import DateBlock from 'components/DateBlock';
import RepositoryBlock from 'components/RepositoryBlock';
import Icon from 'react-fa';

const cx = classNames.bind(styles);

export default class Board extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    const { title, boardStatus, developedDate, content, images, repoUrl, repoUserName, repoName } = this.props;

    return (
      <div className={cx('row')}>
        <div className={cx('col-sm-7')}>
          <article>
            <h1>{title}</h1>
            <BoardStatus status={boardStatus} />
            <DateBlock text="Development started" date={developedDate} />
            <div className={cx('row')}>
              <TextBlock content={content.brief} />
            </div>
            <div className={cx('row')}>
              <TextBlock content={content.extended} />
            </div>
          </article>
        </div>
        <div className={cx('col-sm-5')}>
          <aside>
            <div className={cx('inset-wrapper')}>
              <section className={cx('panel', 'repository-link')}>
                <h3 className={cx('panel-header')}>Project files</h3>
                <RepositoryBlock repoUrl={repoUrl} repoUserName={repoUserName} repoName={repoName} /> 
              </section>
            </div> 
          </aside>
        </div>
      </div>
    );

  }
};

Board.propTypes = {
};
