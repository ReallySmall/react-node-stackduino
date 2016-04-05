import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Post from 'components/Post';
import { fetchWrapper } from 'actions/wrapper';
import { fetchPost } from 'actions/posts';

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
      this.props.dispatch ( fetchPost(this.props.routeParams) );
    };

  	render() {
      const {post} = this.props;

	  	return (
        <Post
          title={post.title}
          publishedDate={post.publishedDate} 
          intro={post.content.brief}
          body={post.content.extended}
          categories={post.categories} />
	  	);

  	}
};

PostContainer.propTypes = {
  // todo
};

function mapStateToProps(state) {
  console.log(state);
  return {
    post: state.posts.details['another-post']
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(PostContainer);
