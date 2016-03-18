import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Gallery from 'components/Gallery';
import { fetchWrapper } from 'actions/wrapper';

export default class GalleryContainer extends Component {

  static need = [
    fetchWrapper
  ];

  constructor(props) {
    super(props);
  };

  render() {

    return (
      <p>Content</p>
    );

  }
  
};

GalleryContainer.propTypes = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(GalleryContainer);
