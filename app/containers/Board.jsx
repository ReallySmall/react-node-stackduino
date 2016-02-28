import React from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_board-detail';
import BoardStatus from 'components/BoardStatus';
import Carousel from 'components/Carousel';
import RepositoryLink from 'components/RepositoryLink';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Board = props => {

  return (
	<div className={s['view-animate-container']}>
        <div className={s.container}>
          <div className={s.row}>
            <div className={s['col-sm-7']}>
              <article>
                <h1>/*{this.props.content.fields.title}*/</h1>
                <BoardStatus /* status={this.props.content.fields.status} */ />
                <section>
                  /* <div dangerouslySetInnerHTML={{ __html: this.props.content.fields.introduction || '' }} /> */
                </section>
                <section>
                  /* <Carousel imageList={this.props.content.fields.images} assets={this.props.assets} /> */
                </section>  
                <section>
                  /* <div dangerouslySetInnerHTML={{ __html: this.props.content.fields.body || '' }} /> */
                </section>
              </article>
            </div>
            <div className={s['col-sm-5']}>
              <aside>
                <RepositoryLink /* repoUrl={this.props.content.fields.github_url} */ />
              </aside>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Board;
