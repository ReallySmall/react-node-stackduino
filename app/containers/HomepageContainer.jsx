import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchHomepage } from 'actions/homepage';
import { fetchFeatureImages } from 'actions/gallery';
import { fetchWrapper } from 'actions/wrapper';
import Homepage from 'components/Homepage';

class HomepageContainer extends Component {

    //Data that needs to be called before rendering the component
    //This is used for server side rending via the fetchComponentDataBeforeRending() method
    static need = [
      fetchWrapper, fetchHomepage
    ];

    constructor(props) {
      super(props);
    };

    componentWillMount() {

      const {content, featureImages, dispatch} = this.props;

      if(!content){ // if homepage is not in state yet
        dispatch ( fetchHomepage() );
      }
      if(!featureImages.images.length){ // if feature images are not in state yet
        dispatch ( fetchFeatureImages() );
      }
    };

    render() {

      const { content, featureImages, isFetching, requestFailed } = this.props;

      return (
        <Homepage isFetching={isFetching} requestFailed={requestFailed} content={content} featureImages={featureImages} />
      );

    }
};

HomepageContainer.propTypes = {
  content: PropTypes.object,
  isFetching: PropTypes.bool,
  requestFailed: PropTypes.bool
};

function mapStateToProps(state) {

  const images = { 
    images: state.featureImages.images,
    isFetching: state.featureImages.images.length ? state.featureImages.isFetching : true,
    requestFailed: state.featureImages.requestFailed
  }

  return {
    content: state.homepage.content,
    featureImages: images,
    isFetching: state.homepage.content ? state.homepage.isFetching : true,
    requestFailed: state.homepage.requestFailed
  };

}

export default connect(mapStateToProps)(HomepageContainer);
