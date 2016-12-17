import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchFeatureImages } from 'actions/gallery';
import FlickrCarousel from 'components/FlickrCarousel';
import Loading from 'components/Loading';
import Error from 'components/Error';
import { messages } from 'utilities/strings';

class FlickrCarouselContainer extends Component {

    constructor(props) {
      super(props);
    };

    componentWillMount() {

      const {images, dispatch} = this.props;

      if(!images || !images.length){ // if feature images are not in state yet
        dispatch ( fetchFeatureImages() );
      }

    };

    render() {

      const { images, isFetching, requestFailed } = this.props;

      return (
        <div>
          {!isFetching && !requestFailed && <FlickrCarousel images={images} />}
        </div>
      );

    }
};

function mapStateToProps(state) {

  return {
    images: state.featureImages.images,
    isFetching: state.featureImages.images.length ? state.featureImages.isFetching : true,
    requestFailed: state.featureImages.requestFailed
  };

}

export default connect(mapStateToProps)(FlickrCarouselContainer);
