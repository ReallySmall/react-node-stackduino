import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {map} from "underscore";
import classNames from 'classnames/bind';
import styles from 'css/components/_carousel';
import { Link } from 'react-router';
import Image from 'components/Image';
import { truncate } from 'utilities/strings';
import { toHttps } from 'utilities/strings';
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
          slideshowSpeed: 12000,
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
                        <ul className={cx('slides')}>
                          {map(images, function(item, i){
        
                            const height = parseInt(item.image.height);
                            const width = parseInt(item.image.width);
                            const ratio = (height / width) * 100;

	                          return (
	                            <li key={i} data-thumb={toHttps(item.image.url)}>
	                                <figure>
	                                  <Image src={toHttps(item.image.url)} alt={item.alt} ratio={ratio}/>
                                    {item.caption && <figcaption dangerouslySetInnerHTML={{ __html: item.caption || '' }} />}
	                                </figure>
	                            </li>
	                          );

                          })}  
                        </ul>                        
                      </div>;                 

    } 

    return (
      <div className={cx('carousel-container', 'pad-bottom')}>
        {sliderElement}
      </div>
    );

  }

}

Carousel.propTypes = {
  images: PropTypes.array.isRequired
};
