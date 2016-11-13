import React, { Component, PropTypes } from 'react';
import { routerMiddleware, push } from 'react-router-redux';
import { connect } from 'react-redux';
import { filterByTags } from 'actions/posts';

class FilterButtonContainer extends Component {

    constructor(props) {
      super(props);
    };

    render() {

      const {path, query, title, tags, filter, redirect} = this.props;

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
        >{title}</a>
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
