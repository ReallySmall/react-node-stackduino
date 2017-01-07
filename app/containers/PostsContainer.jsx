import React, { Component, PropTypes } from 'react';
import {map} from 'underscore';
import Helmet from 'react-helmet';
import Page from 'components/Page';
import IntroBlock from 'components/IntroBlock';
import TagFilter from 'components/TagFilter';
import PostTeaser from 'components/PostTeaser';
import Error from 'components/Error';
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
    static need = [ fetchWrapper, fetchPosts ];

    constructor(props) {
      super(props);
    };

    componentWillMount() {
      if(!this.props.teasers.length){ // if posts are not in state yet
        this.props.dispatch ( fetchPosts() ); // add them
      }
    };

    render() {

      const {teasers, tags, filters, filterLength, isFetching, requestFailed} = this.props;
      let resultCount = 0;

      return (
        <Page isFetching={isFetching} requestFailed={requestFailed} >
          <Helmet 
            title="Articles"
            meta={[
              {"name": "description", "content": "Notes and information on building and using Stackduino boards"}
            ]} />
          <IntroBlock title="Articles" intro="Notes and information on building and using Stackduino boards.">
            <TagFilter filters={filters} filterLength={filterLength} tags={tags} />
          </IntroBlock>
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

            if(!filters || !filters.length){ // if no active filters render out all teasers
              teaserMarkup = postTeaser; 
            } else { // if active filters, render out teasers with tags matching filters
              map(filters, function(filter, i){ // for each active filter
                map(teaser.tags, function(tag, i){ // compare with each tag in the teaser
                  if(tag.name === filter){ // if any matches
                    resultCount++;
                    teaserMarkup = postTeaser; // render teaser
                  }
                });
              });
            };

            return (
              teaserMarkup
            );

          })}
          {filters && filters.length && resultCount === 0 && <Error size="1x" message="Nothing to show, please try different filters." /> || null}
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
    filterLength: state.posts.filterLength,
    isFetching: state.posts.teasers ? state.posts.isFetching : true,
    requestFailed: state.posts.requestFailed
  };

}

export default connect(mapStateToProps)(PostsContainer);
