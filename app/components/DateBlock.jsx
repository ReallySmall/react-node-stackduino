import React, { Component, PropTypes } from 'react';
import Icon from 'react-fa';
import classNames from 'classnames/bind';
import styles from 'css/components/_loading';

const cx = classNames.bind(styles);

export default class DateBlock extends Component {

  render(){

  	const { date } = this.props;

    return (
		<p className={cx('date')}>
			<Icon name="calendar-o" /> {date}
		</p>
    );
  }

};

DateBlock.propTypes = {
  date: PropTypes.string.isRequired
};
