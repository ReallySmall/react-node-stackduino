import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_gallery-page';

const cx = classNames.bind(styles);

export default class Gallery extends Component {

	constructor(props) {
  	super(props);
	};

  render() {

    var photos = [];

    //for(var i=0; i < this.props.list.photo.length; i++){
      
      //var photo = this.props.photos.photo[i];
      //var ratio = (photo.height_n / photo.width_n) * 100;
      
      //photos.push(
        //<li className={cx('gallery-image', 'col-sm-4')}>
          //<a href={"http://flickr.com/photo.gne?id=" + photo.id} title="View on Flickr" className={cx('inset-wrapper')}>
          //<figure className={cx('panel')}>
            //<Image src={"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_z.jpg"} alt={photo.title + " by " + photo.ownername + " on Flickr"} ratio={ratio}/>
            //<figcaption>
              //<p className={cx('plain')}>{photo.title}</p>
              //<p className={cx('plain')}>By {photo.ownername}</p>
            //</figcaption>
          //</figure>
          //</a>
        //</li>
      //);
    //}

    return (
      <div className={cx('view-animate-container')}>
        <div className={cx('container')}>
          <h1>Gallery</h1>
            <div className={cx('row')}>
              <ul className={cx('plain', 'gallery')}>
                {photos}      
              </ul>
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
  list: PropTypes.array.isRequired
};
