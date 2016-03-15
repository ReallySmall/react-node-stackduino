import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';

export default class HeaderContainer extends Component {

    constructor(props) {
      super(props);
    };

    render() {

      return (
        <Header
          title={this.props.settings[0].header.siteTitle}
          subTitle={this.props.settings[0].header.siteSubTitle} />
      );

    }
};

HeaderContainer.propTypes = {
  settings: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    settings: state.settings.settings
  };
}

export default connect(mapStateToProps)(HeaderContainer);
