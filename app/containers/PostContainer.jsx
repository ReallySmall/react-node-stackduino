import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Board from 'components/Board';
import { fetchWrapper } from 'actions/wrapper';
import { fetchPosts } from 'actions/posts';

class PostContainer extends Component {

  	//Data that needs to be called before rendering the component
  	//This is used for server side rending via the fetchComponentDataBeforeRending() method
  	static need = [
    	fetchWrapper, fetchPosts
  	];

  	constructor(props) {
    	super(props);
  	};

    componentWillMount() {
      this.props.dispatch ( fetchPosts(this.props.routeParams) );
    };

  	render() {
      const {post} = this.props.post;

	  	return (
        <p>Test</p>
	  	);

  	}
};

PostContainer.propTypes = {
  // todo
};

function mapStateToProps(state) {
  console.log(state);
  return {
    post: state.posts.posts
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(PostContainer);
