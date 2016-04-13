import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchHomepage } from 'actions/homepage';
import { fetchWrapper } from 'actions/wrapper';
import Homepage from 'components/Homepage';
import Loading from 'components/Loading';

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
      //if(!this.props.content){ // if homepage is not in state yet
        console.log('moo');
        this.props.isFetching = true;
        this.props.dispatch ( fetchHomepage() );
      //}
    };

    render() {

      console.log(this.props);

      const {content} = this.props;
      const homePageContent = this.props.isFetching === true ? <p>Loading</p> : <Homepage content={content} />

      return (
        homePageContent
      );

    }
};

HomepageContainer.propTypes = {
  content: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    content: state.homepage.content,
    isFetching: state.homepage.isFetching
  };
}

export default connect(mapStateToProps)(HomepageContainer);
