import React, { Component, PropTypes } from 'react';
import Masonry from 'react-masonry-component';
import classNames from 'classnames/bind';
import styles from 'css/components/_gallery-page';
import Image from 'components/Image';

const cx = classNames.bind(styles);

export default class Gallery extends Component {

	constructor(props) {
  	super(props);
	};

  render() {

    let photos = [];

    let masonryOptions = {
      transitionDuration: 0
    };

    for(var i=0; i < this.props.images.length; i++){
      
      var photo = this.props.images[i];
      var ratio = (photo.height_n / photo.width_n) * 100;
      
      photos.push(
        <li className={cx('gallery-image', 'col-sm-4')}>
          <a href={"http://flickr.com/photo.gne?id=" + photo.id} title="View on Flickr" className={cx('inset-wrapper')}>
          <figure className={cx('panel')}>
            <Image src={"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_z.jpg"} alt={photo.title + " by " + photo.ownername + " on Flickr"} ratio={ratio}/>
            <figcaption>
              <p className={cx('plain')}>{photo.title}</p>
              <p className={cx('plain')}>By {photo.ownername}</p>
            </figcaption>
          </figure>
          </a>
        </li>
      );
    }

    return (
      <div className={cx('view-animate-container')}>
        <div className={cx('container')}>
          <h1>Gallery</h1>
            <div className={cx('row')}>
              <Masonry
                className={cx('plain', 'gallery')}
                elementType={'ul'}
                options={masonryOptions}
                disableImagesLoaded={false}
              >
                {photos}
            </Masonry>
            </div>
            <div className={cx('row')}>
              <button type="button" className={cx('btn', 'btn-primary', 'center-block')}>
                Show more
              </button>        
            </div>
        </div>
      </div>
    );

  }

};

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};
