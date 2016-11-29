import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchWrapper } from 'actions/wrapper';
import { fetchPost } from 'actions/posts';
import NotFoundContainer from 'containers/NotFoundContainer';
import Page from 'components/Page';
import Post from 'components/Post';

class PostContainer extends Component {

  	//Data that needs to be called before rendering the component
  	//This is used for server side rending via the fetchComponentDataBeforeRending() method
  	static need = [
    	fetchWrapper, fetchPost
  	];

  	constructor(props) {
    	super(props);
  	};

    componentWillMount() {
      if(!this.props.post){
        this.props.dispatch ( fetchPost(this.props.routeParams) );
      }
    };

  	render() {

      const { post, isFetching, requestFailed, location } = this.props;

      return (
        <Page isFetching={isFetching} requestFailed={requestFailed} >
          {post && <Post {...post} location={location} />}
        </Page>
      );

  	}
};

PostContainer.propTypes = {
  // todo
};

function mapStateToProps(state, props) {

  return {
    post: state.posts.details[props.routeParams.slug],
    isFetching: state.posts.details[props.routeParams.slug] ? state.posts.isFetching : true,
    requestFailed: state.posts.requestFailed
  };
  
}

export default connect(mapStateToProps)(PostContainer);
