import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import { fetchSettings } from 'actions/settings';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

export default class HeaderContainer extends Component {

    //Data that needs to be called before rendering the component
    //This is used for server side rending via the fetchComponentDataBeforeRending() method
    //static need = [
      //fetchSettings
    //];

    constructor(props) {
      super(props);
    };

    render() {

      const {siteTitle, siteSubtitle} = this.props;
      return (
        <Header
          title={'siteTitle'}
          subTitle={'siteSubtitle'} />
      );

    }
};

HeaderContainer.propTypes = {
  boards: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

//function mapStateToProps(state) {
  //console.log(state);
  //return {
  //};
//}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
//export default connect(mapStateToProps)(HeaderContainer);
