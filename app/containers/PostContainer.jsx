import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Post from 'components/Post';
import Loading from 'components/Loading';
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
      if(!this.props.post){
        this.props.isFetching = true;
        this.props.dispatch ( fetchPost(this.props.routeParams) );
      }
    };

  	render() {

      const { post } = this.props;

      const postContent = this.props.isFetching === true 
      ? <Loading /> 
      : <Post
          title={post.title}
          publishedDate={post.publishedDate} 
          intro={post.content.brief}
          body={post.content.extended}
          categories={post.categories} />     

	  	return (
        postContent
	  	);

  	}
};

PostContainer.propTypes = {
  // todo
};

function mapStateToProps(state, props) {
  return {
    post: state.posts.details[props.routeParams.slug],
    isFetching: state.posts.isFetching
  };
}

export default connect(mapStateToProps)(PostContainer);
