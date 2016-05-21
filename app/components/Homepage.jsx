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
                          <div className={cx('container')}>
                            <section className={cx('col-md-12')}>
                              <h1 className="visually-hidden">Stackduino</h1>
                              <p dangerouslySetInnerHTML={{ __html: content.content.brief || '' }} />
                            </section>
                            <ImageBlock images={content.imagesSlot1} />
                            <TextBlock content={content.content.extended} />
                            <ImageBlock images={content.imagesSlot2} />
                            <TextBlock content={content.content.additional} />
                          </div>
                        </div>
    }

  	return (
    	<div className={cx('page')}>
        {homepageContent}
      </div>
  	);

	}
};

Homepage.propTypes = {
  content: PropTypes.object
};
