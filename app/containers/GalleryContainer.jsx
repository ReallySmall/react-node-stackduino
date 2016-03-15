import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Gallery from 'components/Gallery';
import { fetchSettings } from 'actions/settings';

export default class GalleryContainer extends Component {

  static need = [
    fetchSettings
  ];

  constructor(props) {
    super(props);
  };

  render() {

    return (
      <Gallery
        tags={this.props.settings[0].gallery.tags}
        perPage={this.props.settings[0].gallery.perPage} />
    );

  }
  
};

GalleryContainer.propTypes = {
  settings: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    settings: state.settings.settings
  };
}

export default connect(mapStateToProps)(GalleryContainer);
