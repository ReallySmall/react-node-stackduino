import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Board from 'components/Board';
import { fetchWrapper } from 'actions/wrapper';
import { fetchBoard } from 'actions/boards';

class BoardContainer extends Component {

  	//Data that needs to be called before rendering the component
  	//This is used for server side rending via the fetchComponentDataBeforeRending() method
  	static need = [
    	fetchWrapper, fetchBoard
  	];

  	constructor(props) {
    	super(props);
  	};

    componentWillMount() {
      console.log('props: ', this.props);
      if(!this.props.board){ // if board detail is not in state yet
        console.log(this.props.routeParams);
        this.props.dispatch ( fetchBoard(this.props.routeParams) ); // add it
      }
    };

  	render() {

      const {board} = this.props;

	  	return (
        <Board 
          title={board.title} 
          status={board.boardStatus}
          developed={board.boardStatus} 
          intro={board.content.brief}
          body={board.content.extended}
          images={board.images}
          version={board.version} />
	  	);

  	}
};

BoardContainer.propTypes = {
  // todo
};

function mapStateToProps(state) {
  return {
    board: state.boards.details['stackduino-v22']
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(BoardContainer);
