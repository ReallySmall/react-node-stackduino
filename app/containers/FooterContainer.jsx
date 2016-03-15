import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Footer from 'components/Footer';

export default class FooterContainer extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    return (
      <Footer />
    );
  }

}

FooterContainer.propTypes = {
  settings: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    settings: state.settings.settings
  };
}
