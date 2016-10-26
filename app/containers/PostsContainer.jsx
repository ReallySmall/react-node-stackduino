import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
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

      return (
        <Page isFetching={isFetching} requestFailed={requestFailed} >
          <IntroBlock title="Articles" intro="Notes on building and using Stackduino boards. More to come!" />
          {_.map(teasers, function(teaser, i){

            let intro = '';

            if(teaser.content && teaser.content.brief){
              intro = teaser.content.brief;
            }

            return (
              <PostTeaser
                key={i} 
                title={teaser.title}
                publishedDate={teaser.publishedDate}
                slug={teaser.slug} 
                intro={intro}
                categories={teaser.categories}
                images={teaser.images} />
            );
          })} 
        </Page>
      );

    }
};

PostsContainer.propTypes = {
  teasers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {

  return {
    teasers: state.posts.teasers,
    isFetching: state.posts.teasers ? state.posts.isFetching : true,
    requestFailed: state.posts.requestFailed
  };

}

export default connect(mapStateToProps)(PostsContainer);
