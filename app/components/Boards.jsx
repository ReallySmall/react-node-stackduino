import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_boards-page';
import BoardTeaser from 'components/BoardTeaser';

const cx = classNames.bind(styles);

export default class Boards extends Component {

	constructor(props) {
  	super(props);
	};

	render() {

    var boardTeasers = [];

    if(this.props.list){
      for(var i = 0; i < this.props.list.length; i++){
        var board = this.props.list[i]; 
        boardTeasers.push(
          <BoardTeaser 
            title={board.title}
            slug={board.slug} 
            version={board.version}
            developed={board.developedDate}
            status={board.boardStatus}
            intro={board.content.brief}
            images={board.images} />
        );
      }
    }

  	return (
    	<div className={cx('view-animate-container')}>
        	<div className={cx('container')}>
          		<h1>Boards</h1>
          		{boardTeasers}
        	</div>
      	</div>
  	);

	}
};

Boards.propTypes = {
  list: PropTypes.array.isRequired
};
