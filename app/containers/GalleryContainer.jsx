import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Gallery from 'components/Gallery';
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
      this.props.dispatch ( fetchGalleryImages() ); // add them
    }
  };

  render() {

    const { images } = this.props;

    return (
      <Gallery images={images} />
    );

  }
  
};

GalleryContainer.propTypes = {};

function mapStateToProps(state) {
  return {
    images: state.gallery.images
  };
}

export default connect(mapStateToProps)(GalleryContainer);
