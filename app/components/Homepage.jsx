import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_home-page';
import Loading from 'components/Loading';
import Error from 'components/Error';
import ImageBlock from 'components/ImageBlock'; 
import Image from 'components/Image';
import FlickrCarousel from 'components/FlickrCarousel';

const cx = classNames.bind(styles);

export default class Homepage extends Component {

	constructor(props) {
  	super(props);
	};

	render() {

    const { content, isFetching, requestFailed } = this.props;

    let homepageContent = null;

    if(isFetching){
      homepageContent = <div className={cx('container')}>
                          <Loading />
                        </div>
    } else if(requestFailed){
      homepageContent = <error />
    } else {
      homepageContent = <div>
                          <section>
                          </section>
                          <div className={cx('container')}>
                            <section>
                              <h1 className="visually-hidden">Stackduino</h1>
                              <p dangerouslySetInnerHTML={{ __html: content.content.brief || '' }} />
                            </section>
                            <section>
                              <div className={cx('row')}>
                                <ImageBlock images={content.imagesSlot1} />
                              </div>
                            </section>
                            <section>
                              <div dangerouslySetInnerHTML={{ __html: content.content.additional || '' }} />
                            </section>
                            <section>
                              <div className={cx('row')}>
                                <ImageBlock images={content.imagesSlot2} />
                              </div>
                            </section>
                            <section>
                              <div dangerouslySetInnerHTML={{ __html: content.content.extended || '' }} />
                            </section>
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
