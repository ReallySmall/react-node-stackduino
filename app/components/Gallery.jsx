import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import Masonry from 'react-masonry-component';
import classNames from 'classnames/bind';
import styles from 'css/components/_gallery-page';
import Image from 'components/Image';
import NoScript from 'components/NoScript';
import { fetchGalleryImages } from 'actions/gallery';
import { truncate } from 'utilities/strings';
import Icon from 'react-fa';

const cx = classNames.bind(styles);

export default class Gallery extends Component {

  constructor(props) {
    super(props);
    this.loadMore = this.loadMore.bind(this)
  };

  loadMore(event){
    event.preventDefault();
    const { dispatch, page, pages } = this.props;
    if(page + 1 <= pages){
      dispatch ( fetchGalleryImages(page + 1) );
    }
  };

  render() {

    const { images, isFetching, requestFailed, loadMore, page, pages } = this.props;

    let masonryOptions = {
      transitionDuration: 0
    };

    let photos = _.map(images, function(photo, i){

      const ratio = (photo.height_n / photo.width_n) * 100;

      return (
        <li key={i} className={cx('gallery-image', 'col-xs-12', 'col-md-6')}>
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

    });

    return (
      <section className={cx('row')}>
        <div className={cx('col-md-12')}>
          <NoScript />
        </div>
        {images && <Masonry
          className={cx('plain', 'gallery')}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
        >
          {photos}
        </Masonry>}
        {!isFetching && !requestFailed &&
          page + 1 <= pages && 
          <p className={cx('load-more', 'col-md-12')}>
            <a href="#" onClick={this.loadMore}>Load more <Icon name="arrow-circle-down" /></a>
          </p>
        }
      </section>
    );

  }

};

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};
