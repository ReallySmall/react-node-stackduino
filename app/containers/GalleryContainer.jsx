import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Gallery from 'components/Gallery';
import { fetchWrapper } from 'actions/wrapper';
import { fetchGallerySettings } from 'actions/gallery';
import { fetchGalleryImages } from 'actions/gallery';

export default class GalleryContainer extends Component {

  static need = [
    fetchWrapper, fetchGallerySettings
  ];

  constructor(props) {
    super(props);
  };

  componentWillMount() {
    if(!this.props.gallerySettings.length){ // if gallery settings are not in state yet
      this.props.dispatch ( fetchGallerySettings() ); // add them
    }
    if(!this.props.galleryImages.length){ // if gallery images are not in state yet
      this.props.dispatch ( fetchGalleryImages() ); // add them
    }
  };

  render() {

    const { gallerySettings, galleryImages } = this.props;

    return (
      <Gallery list={galleryImages} />
    );

  }
  
};

GalleryContainer.propTypes = {};

function mapStateToProps(state) {
  console.log(state);
  return {
    gallerySettings: state.gallery.settings,
    galleryImages: state.gallery.images
  };
}

export default connect(mapStateToProps)(GalleryContainer);
