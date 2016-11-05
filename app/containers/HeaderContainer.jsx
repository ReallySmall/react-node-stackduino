import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';

class HeaderContainer extends Component {

    constructor(props) {
      super(props);
    };

    render() {

      const { header } = this.props.content;    
      const { route } = this.props;

      return (
        header && route && <Header content={header} route={route} />
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
