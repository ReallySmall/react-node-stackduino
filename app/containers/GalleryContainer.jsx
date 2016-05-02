import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Page from 'components/Page';
import IntroBlock from 'components/IntroBlock';
import Gallery from 'components/Gallery';
import LoadMore from 'components/LoadMore';
import { fetchWrapper } from 'actions/wrapper';
import { fetchGalleryImages } from 'actions/gallery';

export default class GalleryContainer extends Component {

  static need = [
    fetchWrapper, fetchGalleryImages
  ];

  constructor(props) {
    super(props);
  };

  componentWillMount() {
    if(!this.props.images.length){ // if gallery images are not in state yet and the initial server side fetch didn't fail
      	this.props.dispatch ( fetchGalleryImages() ); // add them
    }
  };

  render() {

    const { images, page, pages, isFetching, requestFailed } = this.props;

    return (
    	<Page isFetching={isFetching} requestFailed={requestFailed} >
    		<IntroBlock title="Gallery" intro="Intro text" />
			  {images && 
	    		<Gallery images={images} />
	    	}	
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
    isFetching: state.gallery.images ? state.gallery.isFetching : true,
    requestFailed: state.gallery.requestFailed
  };

}

export default connect(mapStateToProps)(GalleryContainer);
