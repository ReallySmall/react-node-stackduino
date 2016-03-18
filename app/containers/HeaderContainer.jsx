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
          title={this.props.wrapper[0].header.siteTitle}
          subtitle={this.props.wrapper[0].header.siteSubtitle} />
      );

    }
};

HeaderContainer.propTypes = {
  wrapper: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  console.log(state);
  return {
    wrapper: state.wrapper.wrapper
  };
}

export default connect(mapStateToProps)(HeaderContainer);
