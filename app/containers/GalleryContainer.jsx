import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchWrapper } from 'actions/wrapper';
import { fetchGalleryImages } from 'actions/gallery';
import Helmet from 'react-helmet';
import Page from 'components/Page';
import IntroBlock from 'components/IntroBlock';
import Gallery from 'components/Gallery';
import LoadButton from 'components/LoadButton';
import { messages } from 'utilities/strings';

class GalleryContainer extends Component {

  static need = [ fetchWrapper ];

  constructor(props) {
    super(props);
  };

  componentWillMount() {
    const { dispatch, images } = this.props; 
    if(!images.length){ // if gallery images are not in state yet
      dispatch ( fetchGalleryImages() ); // add them
    }
  };

  render() {

    const { isFetching, requestFailed } = this.props;

    return (
      <Page isFetching={isFetching} fetchingMessage={messages.flickrFetching} requestFailed={requestFailed} connectionError={true} errorMessage={messages.flickrFailed}>
        <Helmet
          title="Gallery" 
          meta={[
            {"name": "description", "content": "Images of, and taken by, Stackduino controllers on Flickr" }
          ]}/>
        <IntroBlock title="Gallery" intro="Images of, and taken by, Stackduino controllers on Flickr." />
        <Gallery {...this.props} />
      </Page>
    );

  }
  
};

GalleryContainer.propTypes = {

};

function mapStateToProps(state) {

  return {
    images: state.gallery.images,
    pages: state.gallery.pages,
    page: state.gallery.page,
    isFetching: state.gallery.images.length ? state.gallery.isFetching : true,
    requestFailed: state.gallery.requestFailed
  };

}

export default connect(mapStateToProps)(GalleryContainer);
