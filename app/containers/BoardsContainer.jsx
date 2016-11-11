import React, { Component, PropTypes } from 'react';
import {map} from "underscore";
import { connect } from 'react-redux';
import { fetchBoards } from 'actions/boards';
import { fetchWrapper } from 'actions/wrapper';
import Page from 'components/Page';
import IntroBlock from 'components/IntroBlock';
import BoardTeaser from 'components/BoardTeaser';

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

      const {teasers, isFetching, requestFailed, tags} = this.props;

	  	return (
        <Page isFetching={isFetching} requestFailed={requestFailed} >
          <IntroBlock title="Boards" intro="Compatible with the Arduino IDE, Stackduino boards automate the process of focus stacking. Version 2.x boards place the emphasis on an enhanced feature-set. The cost of components is correspondingly slightly higher, and the build more challenging due to the use of SMD technology. Version 1.x boards offer a simpler feature-set, but are cheaper and simpler to build. The latest versions of both 1.x and 2.x boards use identical pcb footprints to facilitate development of universally compatible enclosures and accessories." />
          {map(teasers, function(teaser, i){

            let intro = '';

            if(teaser.content && teaser.content.brief){
              intro = teaser.content.brief;
            }

            return (
              <BoardTeaser 
                key={i}
                title={teaser.title}
                slug={teaser.slug} 
                version={teaser.version}
                developedDate={teaser.developedDate}
                status={teaser.boardStatus}
                intro={intro}
                images={teaser.images} />
            );
          })} 
        </Page>
	  	);

  	}
};

BoardsContainer.propTypes = {
  teasers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {

  return {
    teasers: state.boards.teasers,
    isFetching: state.boards.teasers ? state.boards.isFetching : true,
    requestFailed: state.boards.requestFailed
  };
  
}

export default connect(mapStateToProps)(BoardsContainer);
