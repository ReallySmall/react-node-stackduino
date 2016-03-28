import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchHomepage } from 'actions/homepage';
import { fetchWrapper } from 'actions/wrapper';
import Homepage from 'components/Homepage';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

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
      if(!this.props.content.length){ // if homepage is not in state yet
        this.props.dispatch ( fetchHomepage() );
      }
    };

    render() {

      const {content} = this.props;

      return (
        <Homepage content={content[0]} />
      );

    }
};

HomepageContainer.propTypes = {
  content: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  console.log(state);
  return {
    content: state.homepage.content
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(HomepageContainer);
