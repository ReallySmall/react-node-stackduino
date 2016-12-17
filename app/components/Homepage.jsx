import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_home-page';
import Loading from 'components/Loading';
import Error from 'components/Error';
import ImageBlock from 'components/ImageBlock';
import TextBlock from 'components/TextBlock'; 
import Image from 'components/Image';

const cx = classNames.bind(styles);

export default class Homepage extends Component {

	constructor(props) {
  	super(props);
	};

	render() {

    const { content } = this.props;

  	return (
    	<div className={cx('page', 'home-page', 'container', 'container-wrapper')}>
        <article>
          <h2 className="visually-hidden">Page content</h2>
          <section className={cx('col-md-12', 'content-block', 'white')}>
            <div className={cx('col-md-12')}>
              <div dangerouslySetInnerHTML={{ __html: content.content.slot1 || '' }} />
              <ImageBlock images={content.images.slot1} />
            </div>
          </section>
          <section className={cx('col-md-12', 'content-block', 'lightest-grey')}>
            <div className={cx('col-md-12')}>
              <div dangerouslySetInnerHTML={{ __html: content.content.slot2 || '' }} />
              <ImageBlock images={content.images.slot2} />
            </div>
          </section>
          <section className={cx('col-md-12', 'content-block', 'white')}>
            <div className={cx('col-md-12')}>
              <div dangerouslySetInnerHTML={{ __html: content.content.slot3 || '' }} />
              <ImageBlock images={content.images.slot3} />
            </div>
          </section>
          <section className={cx('col-md-12', 'content-block', 'lightest-grey', 'last')}>
            <div className={cx('col-md-12')}>
              <div dangerouslySetInnerHTML={{ __html: content.content.slot4 || '' }} />
              <ImageBlock images={content.images.slot4} />
            </div>
          </section>
        </article>
      </div>
  	);

	}
};

Homepage.propTypes = {
  content: PropTypes.object
};
