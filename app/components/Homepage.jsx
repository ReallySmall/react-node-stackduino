import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_home-page';
import Helmet from 'react-helmet';
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
    const { images } = content;
    const metaDescription = content.metaDescription || '';

  	return (
    	<div className={cx('page', 'home-page', 'container', 'container-wrapper')}>
        <Helmet
          title="Home" 
          meta={[{"name": "description", "content": metaDescription }]}/>
        <article>
          <h2 className="visually-hidden">About Stackduino</h2>
          <section className={cx('col-md-12', 'content-block', 'white')}>
            <div className={cx('col-md-12')}>
              <div dangerouslySetInnerHTML={{ __html: content.content.slot1 || '' }} />
              <ImageBlock images={images.slot1} />
            </div>
          </section>
          <section className={cx('col-md-12', 'content-block', 'lightest-grey')}>
            <div className={cx('col-md-12')}>
              <div dangerouslySetInnerHTML={{ __html: content.content.slot2 || '' }} />
              <ImageBlock images={images.slot2} />
            </div>
          </section>
          <section className={cx('col-md-12', 'content-block', 'white')}>
            <div className={cx('col-md-12')}>
              <div dangerouslySetInnerHTML={{ __html: content.content.slot3 || '' }} />
              <ImageBlock images={images.slot3} />
            </div>
          </section>
          <section className={cx('col-md-12', 'content-block', 'lightest-grey', 'last')}>
            <div className={cx('col-md-12')}>
              <div dangerouslySetInnerHTML={{ __html: content.content.slot4 || '' }} />
              <ImageBlock images={images.slot4} />
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
