import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Page from 'components/Page';
import IntroBlock from 'components/IntroBlock';
import BoardTeaser from 'components/BoardTeaser';
import { fetchBoards } from 'actions/boards';
import { fetchWrapper } from 'actions/wrapper';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class BoardsContainer extends Component {

  	//Data that needs to be called before rendering the component
  	//This is used for server side rending via the fetchComponentDataBeforeRending() method
  	static need = [
    	fetchWrapper, fetchBoards
  	];

  	constructor(props) {
    	super(props);
  	};

    componentWillMount() {
      if(!this.props.teasers || !this.props.teasers.length){ // if boards are not in state yet
        this.props.dispatch ( fetchBoards() ); // add them
      }
    };

  	render() {

      const {teasers, isFetching, requestFailed} = this.props;
      let teaserComponents = [];

      if(teasers){
        for(let i = 0; i < teasers.length; i++){
          let teaser = teasers[i]; 
          teaserComponents.push(
            <BoardTeaser 
              key={i}
              title={teaser.title}
              slug={teaser.slug} 
              version={teaser.version}
              developed={teaser.developedDate}
              status={teaser.boardStatus}
              intro={teaser.content.brief}
              images={teaser.images} />
          );
        }
      }

	  	return (
        <Page isFetching={isFetching} requestFailed={requestFailed} >
          <IntroBlock title="Boards" intro="Intro text" />
          {teaserComponents} 
        </Page>
	  	);

  	}
};

BoardsContainer.propTypes = {
  teasers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {

  let teasers = state.boards.teasers;
  let isFetching;
  
  if(!teasers){
    isFetching = true;
  } else {
    isFetching = state.boards.isFetching; 
  }

  return {
    teasers: teasers,
    isFetching: isFetching,
    requestFailed: state.boards.requestFailed
  };
}

export default connect(mapStateToProps)(BoardsContainer);
