import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-detail';
import BoardStatus from 'components/BoardStatus';
import Carousel from 'components/Carousel';
//import RepositoryLink from 'components/RepositoryLink';

const cx = classNames.bind(styles);

export default class Board extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    return (
      <div className={cx('view-animate-container')}>
        <div className={cx('container')}>
          <div className={cx('row')}>
            <div className={cx('col-sm-7')}>
              <article>
                <h1>{this.props.title}</h1>
                <BoardStatus status={this.props.status} />
                <section>
                  {this.props.intro}
                </section>
                  <Carousel imageList={this.props.images} />
                <section>
                </section>
                  {this.props.body}  
                <section>
                </section>
              </article>
            </div>
            <div className={cx('col-sm-5')}>
              <aside>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );

  }
};

Board.propTypes = {
};
