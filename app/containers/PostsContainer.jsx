import React, { Component, PropTypes } from 'react';
import {map} from "underscore";
import Page from 'components/Page';
import IntroBlock from 'components/IntroBlock';
import TagFilter from 'components/TagFilter';
import PostTeaser from 'components/PostTeaser';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions/posts';
import { filterByTags } from 'actions/posts';
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

      const {teasers, tags, isFetching, requestFailed} = this.props;
      const filters = this.props.filters.length ? this.props.filters : null;
      
      let queryFilters = this.props.location.query.tags;
      if(queryFilters){
        queryFilters = queryFilters.split(',');
      }

      const activeFilters = filters || queryFilters || null;

      return (
        <Page isFetching={isFetching} requestFailed={requestFailed} >
          <IntroBlock title="Articles" intro="Notes on building and using Stackduino boards." />
          <TagFilter filterTags={activeFilters} allTags={tags} />
          {map(teasers, function(teaser, i){

            let intro = '';

            if(teaser.content && teaser.content.brief){
              intro = teaser.content.brief;
            }

            let teaserMarkup = null;
            let postTeaser = <PostTeaser
                                key={i} 
                                title={teaser.title}
                                publishedDate={teaser.publishedDate}
                                slug={teaser.slug} 
                                intro={intro}
                                categories={teaser.categories}
                                images={teaser.images} />

            if(!activeFilters){
              teaserMarkup = postTeaser;
            } else {
              let tagMatch = false;
              for(let i = 0; i < activeFilters.length; i++){
                let filter = activeFilters[i];
                let postTags = teaser.tags;
                for(let i = 0; i < teaser.tags.length; i++){
                  let tag = teaser.tags[i].name;
                  if(tag === filter){
                    tagMatch = true;
                  }
                }
              }
              if(tagMatch){
                teaserMarkup = postTeaser;
              }
            }

            return (
                teaserMarkup
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
    tags: state.posts.tags,
    filters: state.posts.filters,
    isFetching: state.posts.teasers ? state.posts.isFetching : true,
    requestFailed: state.posts.requestFailed
  };

}

export default connect(mapStateToProps)(PostsContainer);
