import React, { Component, PropTypes } from 'react';
import { routerMiddleware, push } from 'react-router-redux';
import { connect } from 'react-redux';
import { filterByTags } from 'actions/posts';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-detail';

const cx = classNames.bind(styles);

class FilterButtonContainer extends Component {

    constructor(props) {
      super(props);
    };

    render() {

      const {path, query, title, tags, filter, redirect, icon} = this.props;

      return (
        <a 
          href={path} 
          onClick={
            (event) => { 
              event.preventDefault();
              filter(tags); 
              redirect(path);
            }
          }
        >
          {icon && <span className={cx('fa', icon)}></span>} {title}
        </a>
      );

    }
};

function mapStateToProps() { return {};};

function mapDispatchToProps(dispatch) {
  return {
    filter: (tags) => dispatch(filterByTags(tags)),
    redirect: (path) => dispatch(push(path))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtonContainer);
