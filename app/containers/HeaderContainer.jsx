import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Navigation from 'components/Navigation';

export default class HeaderContainer extends Component {

    constructor(props) {
      super(props);
    };

    render() {

      const {content, route} = this.props;

      return (
        <div>
          <Header {...content} />
          <Navigation route={route} />
        </div>
      );

    }
};

HeaderContainer.propTypes = {
  content: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    content: state.wrapper.content,
    route: state.routing
  };
}

export default connect(mapStateToProps)(HeaderContainer);
