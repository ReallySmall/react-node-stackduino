import React, { Component, PropTypes } from 'react';
import { routerMiddleware, push } from 'react-router-redux';
import { connect } from 'react-redux';
import {map} from 'underscore';
import { filterByTags } from 'actions/posts';
import classNames from 'classnames/bind';
import styles from 'css/components/_filter-buttons';

const cx = classNames.bind(styles);

class FilterButtonContainer extends Component {

    constructor(props) {
      super(props);
    };

    render() {

      const {path, query, title, tags, filter, redirect, icon} = this.props;
      let tagList = null;

      return (
        <div className={cx('filter-buttons', 'clearfix')}>
          <h3>{title}</h3>
          <ul className={cx('plain')}>
            {map(tags, function(tag, i){
              return(
                <li key={i}>
                  <a 
                    href={path}
                    title="Find articles related to this"
                    className={cx('tag')}
                    onClick={
                      (event) => { 
                        event.preventDefault();
                        filter([tag]); 
                        redirect(path);
                      }
                    }
                  >
                    {icon && <span className={cx('fa', icon)}></span>} {tag}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )

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
