import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_home-page';
import Image from 'components/Image';
import FlickrCarousel from 'components/FlickrCarousel';

const cx = classNames.bind(styles);

export default class Homepage extends Component {

	constructor(props) {
  	super(props);
	};

	render() {

    const {content} = this.props;
    const imagesSlot1 = [];
    const imagesSlot2 = [];

    for(var i = 0; i < content.imagesSlot1.length; i++){
      let img = content.imagesSlot1[i];
      let colWidth = Math.ceil(12 / content.imagesSlot1.length);
      img.ratio = (img.height / img.width) * 100;
      imagesSlot1 .push(
        <div className={cx('col-md-' + colWidth)}>
          <div className={cx('inset-wrapper')}>
            <figure>
              <Image src={img.url} alt="" ratio={img.ratio}/>
              <figcaption>Test</figcaption>
            </figure>
          </div>
        </div>
      );
    }

    for(var i = 0; i < content.imagesSlot2.length; i++){
      let img = content.imagesSlot2[i];
      let colWidth = Math.ceil(12 / content.imagesSlot2.length);
      img.ratio = (img.height / img.width) * 100;
      imagesSlot2 .push(
        <div className={cx('col-md-' + colWidth)}>
          <div className={cx('inset-wrapper')}>
            <figure>
              <Image src={img.url} alt="" ratio={img.ratio}/>
              <figcaption>Test</figcaption>
            </figure>
          </div>
        </div>
      );
    }

  	return (
    	<div className={cx('view')}>
        <section>
          <FlickrCarousel />
        </section>
        <div className={cx('container')}>
          <section>
            <h1 className="visually-hidden">Stackduino</h1>
            <p dangerouslySetInnerHTML={{ __html: content.content.brief || '' }} />
          </section>
          <section>
            <div className={cx('row')}>
              {imagesSlot1}
            </div>
          </section>
          <section>
            <div dangerouslySetInnerHTML={{ __html: content.content.additional || '' }} />
          </section>
          <section>
            <div className={cx('row')}>
              {imagesSlot2}
            </div>
          </section>
          <section>
            <div dangerouslySetInnerHTML={{ __html: content.content.extended || '' }} />
          </section>
        </div>
      </div>
  	);

	}
};

Homepage.propTypes = {
  settings: PropTypes.object.isRequired, 
  content: PropTypes.object.isRequired
};
