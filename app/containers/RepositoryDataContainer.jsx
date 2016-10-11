import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchRepoDetail } from 'actions/repodetails';
import Loading from 'components/Loading';
import Error from 'components/Error';

class RepositoryDataContainer extends Component {

  componentDidMount() {

    const { repoInfoType, repoUserName, repoName } = this.props;

    //if(!this.props.repoDetail){ // if board detail is not in state yet
    if(repoInfoType && repoUserName && repoName){
      this.props.dispatch ( fetchRepoDetail({type: repoInfoType, user: repoUserName, repo: repoName}) ); // add it
    }
    //}
  }

  render() {

    const { isFetching, requestFailed, repoDetail } = this.props;

    let childrenWithProps = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, { repoDetail: repoDetail });
    });

    return (
      <div>
        {childrenWithProps}
        {!repoDetail && isFetching && !requestFailed && <Loading size="lg" />}
        {!repoDetail && requestFailed && <Error size="lg" message="Couldn't connect to GitHub" />}
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