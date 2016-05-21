import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Page from 'components/Page';
import IntroBlock from 'components/IntroBlock';
import Gallery from 'components/Gallery';
import LoadButton from 'components/LoadButton';
import Icon from 'react-fa';
import { fetchWrapper } from 'actions/wrapper';
import { fetchGalleryImages } from 'actions/gallery';

export default class GalleryContainer extends Component {

  static need = [
    fetchWrapper
  ];

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

  componentWillMount() {
    const { dispatch, images } = this.props; 
    if(!images.length){ // if gallery images are not in state yet
      dispatch ( fetchGalleryImages() ); // add them
    }
  };

  render() {

    const { images, page, pages, isFetching, requestFailed } = this.props;

    return (
    	<Page isFetching={isFetching} fetchingMessage="Fetching images from Flickr" requestFailed={requestFailed} requestFailedMessage="Failed to load gallery images from Flickr">
    		<IntroBlock title="Gallery" intro="Intro text" />
			  {images && 
	    		<Gallery images={images} />
	    	}
        {!isFetching && 
          page + 1 <= pages && 
          <p><a href="#" onClick={this.loadMore}>Load more <Icon name="arrow-circle-down" /></a></p>
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
    isFetching: state.gallery.images.length ? state.gallery.isFetching : true,
    requestFailed: state.gallery.requestFailed
  };

}

export default connect(mapStateToProps)(GalleryContainer);
