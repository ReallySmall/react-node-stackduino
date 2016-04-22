import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Page from 'components/Page';
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
      if(!this.props.post){
        this.props.dispatch ( fetchPost(this.props.routeParams) );
      }
    };

  	render() {

      const { post } = this.props;

      return (
        <Page isFetching={post.isFetching} requestFailed={post.requestFailed} >
          <Post
            title={post.title} 
            date={post.publishedDate} 
            intro={post.intro}
            body={post.content.extended}
            categories={post.categories} />  
        </Page>
      );

  	}
};

PostContainer.propTypes = {
  // todo
};

function mapStateToProps(state, props) {

  let post = state.posts.details[props.routeParams.slug];
  let isFetching;
  
  if(!post){
    isFetching = true;
  } else {
    isFetching = state.posts.isFetching; 
  }

  return {
    post: post,
    isFetching: isFetching,
    requestFailed: state.posts.requestFailed
  };
}

export default connect(mapStateToProps)(PostContainer);
