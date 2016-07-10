import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import classNames from 'classnames/bind';
import styles from 'css/components/_flickr-carousel';
import { Link } from 'react-router';
import Image from 'components/Image';
import { truncate } from 'utilities/strings';
import Icon from 'react-fa';
import Loading from 'components/Loading';
import Error from 'components/Error';

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

    const { images, isFetching, requestFailed } = this.props;

    if(this.state.componentDidMount && !this.state.carouselInitialised && !isFetching && !requestFailed && images.length){
      $(this.refs.flexslider)
        .flexslider({
          animation: 'slide',
          animationLoop: true,
          slideshow: true,
          slideshowSpeed: 10000,
          pauseOnHover: true,
          controlNav: false,
          directionNav: false
        });
      this.setState({carouselInitialised: true});
    } 
  }

  componentWillUnmount() {
    this.setState({componentDidMount: false});
    this.setState({carouselInitialised: false});
  }

  render() {

    const { images, isFetching, requestFailed } = this.props;
    let containerClass = '';

    if(requestFailed){
      containerClass = 'request-failed-container';
    } else if(isFetching){
      containerClass = 'is-fetching-container';
    } else {
      containerClass = ''
    }

    let sliderElement = null;

    if(!isFetching && !requestFailed && images && images.length){

      sliderElement = <div ref="flexslider" className={cx('js-flexslider', 'carousel')}>
                        <ul className={cx('slides', 'plain', 'no-list-style')}>
                          {_.map(images, function(image, i){
        
                            const height = parseInt(image.height_l);
                            const width = parseInt(image.width_l);
                            const ratio = (height / width) * 100;

                            if(width >= 1024){
                              return (
                                <li key={i}>
                                  <a href={"http://flickr.com/photo.gne?id=" + image.id} title="View on Flickr">
                                    <figure>
                                      <Image src={image.url_c} alt={image.title + " by " + image.ownername + " on Flickr"} ratio={ratio}/>
                                      <figcaption>
                                        <p className={cx('plain','title')}>{truncate(image.title, 60)}</p>
                                        <p className={cx('plain', 'owner')}><Icon name="flickr" /> {truncate(image.ownername, 60)}</p>
                                      </figcaption>
                                    </figure>
                                  </a>
                                </li>
                              );
                            }        
                            
                            return null;

                          })}  
                        </ul>                        
                        <ul className={cx('plain')}>
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

    } else {
      
      sliderElement = <div className={cx('container')}>
                        {isFetching && !requestFailed && <Loading size="2x" message="Loading feature images" />}
                        {requestFailed && <Error size="2x" message="Failed to load feature images from Flickr" />}
                      </div> 
    }

    return (
      <div className={cx('carousel-container', containerClass)}>
        {sliderElement}
      </div>
    );
  }

}

FlickrCarousel.propTypes = {
  images: PropTypes.array.isRequired
};
