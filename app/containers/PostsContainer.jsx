import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import Posts from 'components/Posts';
import { fetchPosts } from 'actions/posts';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class PostsContainer extends Component {

    //Data that needs to be called before rendering the component
    //This is used for server side rending via the fetchComponentDataBeforeRending() method
    static need = [
      fetchPosts
    ];

    constructor(props) {
      super(props);
    };

    render() {

      const {posts} = this.props;
      console.log(this.props.posts);
      return (
        <p>test</p>
      );

    }
};

PostsContainer.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  console.log(state);
  return {
    posts: state.post.posts
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(PostsContainer);
