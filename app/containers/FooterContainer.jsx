import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Footer from 'components/Footer';

class FooterContainer extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    const { footer } = this.props.content;

    return (
      <div>
        {footer && <Footer content={footer} />}
      </div>
    );

  }

}

FooterContainer.propTypes = {
  content: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    content: state.wrapper.content || null
  };
}

export default connect(mapStateToProps)(FooterContainer);
