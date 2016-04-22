import React, { Component, PropTypes } from 'react';
import Page from 'components/Page';
import IntroBlock from 'components/IntroBlock';
import PostTeaser from 'components/PostTeaser';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions/posts';
import { fetchWrapper } from 'actions/wrapper';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class PostsContainer extends Component {

    //Data that needs to be called before rendering the component
    //This is used for server side rending via the fetchComponentDataBeforeRending() method
    static need = [
      fetchWrapper, fetchPosts
    ];

    constructor(props) {
      super(props);
    };

    componentWillMount() {
      if(!this.props.teasers.length){ // if posts are not in state yet
        this.props.dispatch ( fetchPosts() ); // add them
      }
    };

    render() {

      const {teasers, isFetching, requestFailed} = this.props;
      let teaserComponents = [];

      if(teasers){
        for(let i = 0; i < teasers.length; i++){
          let teaser = teasers[i]; 
          teaserComponents.push(
            <PostTeaser 
              title={teaser.title}
              published={teaser.publishedDate}
              slug={teaser.slug} 
              intro={teaser.content.brief}
              categories={teaser.categories} />
          );
        }
      }

      return (
        <Page isFetching={isFetching} requestFailed={requestFailed} >
          <IntroBlock title="Posts" intro="Intro text" />
          {teaserComponents} 
        </Page>
      );

    }
};

PostsContainer.propTypes = {
  teasers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {

  let teasers = state.posts.teasers;
  let isFetching;
  
  if(!teasers){
    isFetching = true;
  } else {
    isFetching = state.posts.isFetching; 
  }

  return {
    teasers: teasers,
    isFetching: isFetching,
    requestFailed: state.posts.requestFailed
  };
}

export default connect(mapStateToProps)(PostsContainer);
