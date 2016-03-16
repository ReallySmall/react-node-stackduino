import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchHomepage } from 'actions/homepage';
import { fetchSettings } from 'actions/settings';
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
      fetchSettings, fetchHomepage
    ];

    constructor(props) {
      super(props);
    };

    render() {

      const {settings, homepage} = this.props;

      console.log(this.props);

      return (
        <Homepage settings={settings} content={homepage} />
      );

    }
};

HomepageContainer.propTypes = {
  settings: PropTypes.object.isRequired,
  homepage: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    settings: state.settings.settings[0],
    homepage: state.homepage.homepage[0]
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(HomepageContainer);
