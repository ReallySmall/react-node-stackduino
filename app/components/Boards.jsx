import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_boards-page';
import BoardTeaser from 'components/BoardTeaser';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

export default class Boards extends Component {

	constructor(props) {
  	super(props);
	};

  propTypes = {
    list: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  };

	render() {

    console.log(this.props.list);
    console.log("list");

    var boardTeasers = [];

    for(var i = 0; i < this.props.list.length; i++){
      var board = this.props.list[i]; 
      boardTeasers.push(
        <BoardTeaser 
          title={board.title} 
          version={board.version}
          developed={board.developedDate}
          status={board.boardStatus}
          intro={board.content.brief}
          images={board.images} />
      );
    }

  	return (
    	<div className={cx('view-animate-container')}>
        	<div className={cx('container')}>
          		<h1></h1>
          		<p></p>
              {boardTeasers}	          		
        	</div>
      	</div>
  	);

	}
};
