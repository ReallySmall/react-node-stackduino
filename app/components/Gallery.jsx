import React, { Component, PropTypes } from 'react';
import Masonry from 'react-masonry-component';
import classNames from 'classnames/bind';
import styles from 'css/components/_gallery-page';
import Image from 'components/Image';
import { truncate } from 'utilities/strings';
import Icon from 'react-fa';

const cx = classNames.bind(styles);

export default class Gallery extends Component {

	constructor(props) {
  	super(props);
	};

  render() {

    const { images } = this.props;

    let photos = [];

    let masonryOptions = {
      transitionDuration: 0
    };


    for(var i=0; i < images.length; i++){
      
      var photo = images[i];
      var ratio = (photo.height_n / photo.width_n) * 100;
      
      photos.push(
        <li key={i} className={cx('gallery-image', 'col-sm-4')}>
          <a href={"http://flickr.com/photo.gne?id=" + photo.id} title="View on Flickr" className={cx('inset-wrapper', 'image-link')}>
            <figure className={cx('panel')}>
              <Image src={"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_z.jpg"} alt={photo.title + " by " + photo.ownername + " on Flickr"} ratio={ratio}/>
              <figcaption>
                <p className={cx('plain','title')}>{truncate(photo.title, 30)}</p>
                <p className={cx('plain', 'owner')}><Icon name="flickr" /> {truncate(photo.ownername, 30)}</p>
              </figcaption>
            </figure>
          </a>
        </li>
      );
    }

    return (
      <section className={cx('row')}>
        <Masonry
          className={cx('plain', 'gallery')}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
        >
          {photos}
        </Masonry>
      </section>
    );

  }

};

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};
