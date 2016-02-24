import React from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_boards-page';
import BoardTeaser from 'components/BoardTeaser';
import Breadcrumb from 'components/Breadcrumb';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const BoardsPage = props => {

    //propTypes = {
      //boards: PropTypes.array,
    //};
  
    //props.boards.sort(function(obj1, obj2) {
      //return obj2.version - obj1.version;
    //});

    var boards = [];

    //for(var i = 0; i < props.boards.length; i++){
      //boards.push(<BoardTeaser content={props.boards[i]} assets={props.assets}/>);
    //}

  return (
    <div className={cx('view-animate-container')}>
        <div className={cx('container')}>
          <h1></h1>
          <p></p>
          {boards}
        </div>
      </div>
  );
};

export default BoardsPage;
