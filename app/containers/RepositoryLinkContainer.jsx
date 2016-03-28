import React, { Component, PropTypes } from 'react';

class RepositoryLink extends Component {

  componentDidMount() {

    let url_segments = this.props.repoUrl.split('/');
    let repo_id = $.trim(url_segments[url_segments.length-1]);
    let gitHubUrl = 'https://api.github.com/repos/reallysmall/';

    $.ajax({
      url: gitHubUrl + repo_id + "/commits?per_page=3",
      dataType: 'json',
      cache: true,
      success: function(data) {
        this.setState({commits: data}); // this needs to be a dispatch to store statement
        console.log(this.state.commits);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.repoUrl, status, err.toString());
      }.bind(this)
    });

    $.ajax({
      url: gitHubUrl + repo_id + "/issues?state=all",
      dataType: 'json',
      cache: true,
      success: function(data) {
        this.setState({issues: data});  // this needs to be a dispatch to store statement
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.repoUrl, status, err.toString());
      }.bind(this)
    });

  }

  render() {

    return (
      <p>test</p>
    );

  }
  
}

RepositoryLinkContainer.propTypes = {
  repoUrl: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    repoLink: state.boards.boards
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(RepositoryLinkContainer);