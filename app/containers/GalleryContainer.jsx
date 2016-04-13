import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Gallery from 'components/Gallery';
import Loading from 'components/Loading';
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
    if(!this.props.images.length){ // if gallery images are not in state yet
    	this.props.isFetching = true;
      	this.props.dispatch ( fetchGalleryImages() ); // add them
    }
  };

  render() {

    const { images } = this.props;
    const galleryContent = this.props.isFetching === true ? <div><Gallery images={images} /><Loading /></div> : <Gallery images={images} />; 

    return (
      galleryContent
    );

  }
  
};

GalleryContainer.propTypes = {};

function mapStateToProps(state) {
  return {
    images: state.gallery.images,
    pages: state.gallery.pages,
    page: state.gallery.page,
    isFetching: state.gallery.isFetching
  };
}

export default connect(mapStateToProps)(GalleryContainer);
