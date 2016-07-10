import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import classNames from 'classnames/bind';
import styles from 'css/components/_carousel';
import { Link } from 'react-router';
import Image from 'components/Image';
import { truncate } from 'utilities/strings';
import Icon from 'react-fa';
import Loading from 'components/Loading';
import Error from 'components/Error';

const isBrowser = typeof window !== 'undefined';
const flexslider = isBrowser ? require( 'flexslider') : undefined;
const cx = classNames.bind(styles);

export default class Carousel extends Component {

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

    if(this.state.componentDidMount && !this.state.carouselInitialised && images && images.length){
      $(this.refs.flexslider)
        .flexslider({
          animation: 'slide',
          animationLoop: true,
          slideshow: true,
          slideshowSpeed: 10000,
          pauseOnHover: true,
          controlNav: 'thumbnails',
          directionNav: false,
          smoothHeight: true
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

      sliderElement = <div ref="flexslider" className={cx('js-flexslider', 'carousel')}>
                        <ul className={cx('slides', 'plain', 'no-list-style')}>
                          {_.map(images, function(image, i){
        
                            const height = parseInt(image.height);
                            const width = parseInt(image.width);
                            const ratio = (height / width) * 100;

	                          return (
	                            <li key={i} data-thumb={image.url}>
	                                <figure>
	                                  <Image src={image.url} alt="" ratio={ratio}/>
	                                </figure>
	                            </li>
	                          );

                          })}  
                        </ul>                        
                      </div>;                 

    } 

    return (
      <div className={cx('carousel-container')}>
        {sliderElement}
      </div>
    );

  }

}

Carousel.propTypes = {
  images: PropTypes.array.isRequired
};
