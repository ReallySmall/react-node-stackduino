import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {map} from "underscore";
import classNames from 'classnames/bind';
import styles from 'css/components/_flickr-carousel';
import { Link } from 'react-router';
import Image from 'components/Image';
import { truncate } from 'utilities/strings';

const isBrowser = typeof window !== 'undefined';
const flexslider = isBrowser ? require( 'flexslider') : undefined;
const cx = classNames.bind(styles);

export default class FlickrCarousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      componentDidMount: false,
      carouselInitialised: false
    };
  }

  componentDidMount() {
    this.setState({componentDidMount: true});
  }

  componentDidUpdate(){

    const { images } = this.props;

    if(this.state.componentDidMount && !this.state.carouselInitialised && images.length){
      $(this.refs.flexslider)
        .flexslider({
          animation: 'slide',
          animationLoop: true,
          slideshow: true,
          slideshowSpeed: 10000,
          pauseOnHover: true,
          controlNav: false,
          customDirectionNav: $(this.refs.flexslider).find('.js-ui-carousel-controls a')
        });
      this.setState({carouselInitialised: true});
    } 
  }

  componentWillUnmount() {
    this.setState({componentDidMount: false});
    this.setState({carouselInitialised: false});
  }

  render() {

    const { images } = this.props;
    let sliderElement = null;

    if(images && images.length){

      sliderElement = <div ref="flexslider" className={cx('js-flexslider', 'carousel', 'no-script-hide')}>
                        <h3 className="visually-hidden">Images created with Stackduino</h3>
                        <ul className={cx('slides', 'plain', 'no-list-style')}>
                          {map(images, function(image, i){
        
                            const height = parseInt(image.height_l);
                            const width = parseInt(image.width_l);
                            const ratio = (height / width) * 100;

                            if(width >= 800){
                              return (
                                <li key={i}>
                                  <a href={"http://flickr.com/photo.gne?id=" + image.id} title="View on Flickr">
                                    <figure>
                                      <Image src={image.url_z} alt={image.title + " by " + image.ownername + " on Flickr"} ratio={ratio}/>
                                      <figcaption>
                                        <p className={cx('plain','title')}>{truncate(image.title, 60)}</p>
                                      </figcaption>
                                    </figure>
                                  </a>
                                </li>
                              );
                            }        
                            
                            return null;

                          })}  
                        </ul>                        
                        <ul ref="flexsliderControls" className={cx('plain', 'js-ui-carousel-controls')}>
                          <li>
                            <a href="#" className={cx('slide-cover', 'slide-cover-left', 'flex-prev')}>
                              <span className={cx('fa', 'fa-arrow-circle-left')}></span>
                              <span className={cx('visually-hidden')}>Show previous image</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className={cx('slide-cover', 'slide-cover-right', 'flex-next')}>
                              <span className={cx('fa', 'fa-arrow-circle-right')}></span>
                              <span className={cx('visually-hidden')}>Show next image</span>
                            </a>
                          </li>
                        </ul>
                      </div>;                 

    } 

    return (
      <div className={cx('carousel-container', 'hero-carousel')}>
        {sliderElement}
      </div>
    );
  }

}

FlickrCarousel.propTypes = {
  images: PropTypes.array.isRequired
};
