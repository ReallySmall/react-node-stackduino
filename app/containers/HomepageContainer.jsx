import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchHomepage } from 'actions/homepage';
import { fetchWrapper } from 'actions/wrapper';
import Homepage from 'components/Homepage';

class HomepageContainer extends Component {

    //Data that needs to be called before rendering the component
    //This is used for server side rending via the fetchComponentDataBeforeRending() method
    static need = [
      fetchWrapper, fetchHomepage
    ];

    constructor(props) {
      super(props);
    };

    componentWillMount() {
      if(!this.props.content){ // if homepage is not in state yet
        this.props.dispatch ( fetchHomepage() );
      }
    };

    render() {

      const { content, isFetching, requestFailed } = this.props;

      return (
        <Homepage isFetching={isFetching} requestFailed={requestFailed} content={content} />
      );

    }
};

HomepageContainer.propTypes = {
  content: PropTypes.object,
  isFetching: PropTypes.bool,
  requestFailed: PropTypes.bool
};

function mapStateToProps(state) {

  return {
    content: state.homepage.content,
    isFetching: state.homepage.content ? state.homepage.isFetching : true,
    requestFailed: state.homepage.requestFailed
  };

}

export default connect(mapStateToProps)(HomepageContainer);
