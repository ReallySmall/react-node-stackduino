import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import Icon from 'react-fa';
import classNames from 'classnames/bind';
import styles from 'css/components/_date-block';

const cx = classNames.bind(styles);

export default class DateBlock extends Component {

  render(){

  	const { text, date } = this.props;

  	const dateElement = !date 

  	? 	null 
  	: 	<p className={cx('date', 'clearfix')}>
			<Icon name="calendar-o" className={cx('icon')} /> {text && text + ' '}{moment(date).format('MMMM Do YYYY')}
		</p>

    return (
		dateElement
    );
  }

};

DateBlock.propTypes = {
  date: PropTypes.string.isRequired
};
