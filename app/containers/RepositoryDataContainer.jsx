import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchRepoDetail } from 'actions/repodetails';
import Loading from 'components/Loading';
import Error from 'components/Error';

class RepositoryDataContainer extends Component {

  componentDidMount() {

    const { repoInfoType, repoUserName, repoName } = this.props;

    console.log(this.props);

    //if(!this.props.repoDetail){ // if board detail is not in state yet
    if(repoInfoType && repoUserName && repoName){
      this.props.dispatch ( fetchRepoDetail({type: repoInfoType, user: repoUserName, repo: repoName}) ); // add it
    }
    //}
  }

  render() {

    const { isFetching, requestFailed, repoDetail } = this.props;

    return (
      <div>
        {React.cloneElement(this.props.children, { repoDetail: repoDetail })}
        {isFetching && <Loading size="1x" />}
        {requestFailed && <Error size="1x" message="Loading error" />}
      </div>
    );

  }
  
}

RepositoryDataContainer.propTypes = {
  repoInfoType: PropTypes.string.isRequired,
  repoUserName: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired
}

function mapStateToProps(state, props) {
  const id = props.repoName + props.repoInfoType;
  return {
    repoDetail: state.repodata.repos[id],
    isFetching: state.repodata.repos[id] ? state.repodata.isFetching : true,
    requestFailed: state.repodata.requestFailed
  };
}

export default connect(mapStateToProps)(RepositoryDataContainer);