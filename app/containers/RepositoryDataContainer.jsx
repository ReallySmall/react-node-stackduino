import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchRepoDetail } from 'actions/repodetails';
import Loading from 'components/Loading';
import Error from 'components/Error';

class RepositoryDataContainer extends Component {

  componentDidMount() {
    //if(!this.props.repoDetail){ // if board detail is not in state yet
      this.props.dispatch ( fetchRepoDetail({type: 'issues', user: 'ReallySmall', repo: 'stackduino-v2'}) ); // add it
    //}
  }

  render() {

    const { isFetching, requestFailed } = this.props;

    return (
      <div>
        {this.props.children}
        {isFetching && <Loading size="1x" />}
        {requestFailed && <Error size="1x" message="Loading error :(" />}
      </div>
    );

  }
  
}

RepositoryDataContainer.propTypes = {
  url: PropTypes.string.isRequired
}

function mapStateToProps(state, props) {
  return {
    repoDetail: state.repodata.repos[props.url],
    isFetching: state.repodata.repos[props.url] ? state.repodata.isFetching : true,
    requestFailed: state.repodata.requestFailed
  };
}

export default connect(mapStateToProps)(RepositoryDataContainer);