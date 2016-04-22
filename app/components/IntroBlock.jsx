import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-teaser';

const cx = classNames.bind(styles);

export default class IntroBlock extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <section>
        <div className={cx('row')}>
          <div className={cx('col-md-12')}>
            <h1>{this.props.intro}</h1>
            <p>{this.props.intro}</p>
          </div>
        </div>
      </section>
    );
  }

}

IntroBlock.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired
};
