import React from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_articles-page';
//import PostTeaser from 'components/PostTeaser';

const cx = classNames.bind(styles);

export default class Posts extends Component {

  render(){

    var postList = [];

    //for(var i = 0; i < props.boards.length; i++){
      //articles.push(<BoardTeaser content={props.boards[i]} assets={props.assets}/>);
    //}

    return (
      <div className={cx('view-animate-container')}>
          <div className={cx('container')}>
            <h1></h1>
            <p>test</p>
            {postList}
          </div>
        </div>
    );

  }

};
