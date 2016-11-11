import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_board-teaser';

const cx = classNames.bind(styles);

export default class IntroBlock extends Component {

  constructor(props) {
    super(props);
  }

  render(){

    const { title, intro } = this.props;

    return (
      <section>
        <div className={cx('col-md-12', 'intro-block')}>
          <h2 className={cx('page-heading')}>{title}</h2>
          <p>{intro}</p>
        </div>
      </section>
    );
  }

}

IntroBlock.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired
};
