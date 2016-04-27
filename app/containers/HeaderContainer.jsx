import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Navigation from 'components/Navigation';

export default class HeaderContainer extends Component {

    constructor(props) {
      super(props);
    };

    render() {

      const {content} = this.props;

      return (
        <div>
          <Header
            title={content.header.siteTitle}
            subtitle={content.header.siteSubtitle} />
          <Navigation />
        </div>
      );

    }
};

HeaderContainer.propTypes = {
  content: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    content: state.wrapper.content
  };
}

export default connect(mapStateToProps)(HeaderContainer);
