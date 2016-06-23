import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_home-page';
import Loading from 'components/Loading';
import Error from 'components/Error';
import ImageBlock from 'components/ImageBlock';
import TextBlock from 'components/TextBlock'; 
import Image from 'components/Image';
import FlickrCarousel from 'components/FlickrCarousel';

const cx = classNames.bind(styles);

export default class Homepage extends Component {

	constructor(props) {
  	super(props);
	};

	render() {

    const { content, featureImages, isFetching, requestFailed } = this.props;

    let homepageContent = null;

    if(isFetching){
      homepageContent = <div className={cx('container')}>
                          <Loading size="2x" />
                        </div>
    } else if(requestFailed){
      homepageContent = <div className={cx('container')}>
                          <error size="2x" message="Loading error" />
                        </div>
    } else {
      homepageContent = <div>
                          <section>
                            <FlickrCarousel 
                              images={featureImages.images} 
                              isFetching={featureImages.isFetching} 
                              requestFailed={featureImages.requestFailed} />
                          </section>
                          <section className={cx('col-md-12', 'content-block', 'lightest-grey')}>
                            <div className={cx('container')}>
                              <h1 className="visually-hidden">Stackduino</h1>
                              <p dangerouslySetInnerHTML={{ __html: content.content.slot1 || '' }} />
                              <ImageBlock images={content.images.slot1} />
                            </div>
                          </section>
                          <section className={cx('col-md-12', 'content-block', 'white')}>
                            <div className={cx('container')}>
                              <p dangerouslySetInnerHTML={{ __html: content.content.slot2 || '' }} />
                              <ImageBlock images={content.images.slot2} />
                            </div>
                          </section>
                          <section className={cx('col-md-12', 'content-block', 'lightest-grey')}>
                            <div className={cx('container')}>
                              <p dangerouslySetInnerHTML={{ __html: content.content.slot3 || '' }} />
                              <ImageBlock images={content.images.slot3} />
                            </div>
                          </section>
                          <section className={cx('col-md-12', 'content-block', 'white')}>
                            <div className={cx('container')}>
                              <p dangerouslySetInnerHTML={{ __html: content.content.slot4 || '' }} />
                              <ImageBlock images={content.images.slot4} />
                            </div>
                          </section>
                        </div>
    }

  	return (
    	<div className={cx('page', 'home-page')}>
        {homepageContent}
      </div>
  	);

	}
};

Homepage.propTypes = {
  content: PropTypes.object
};
