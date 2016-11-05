import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import classNames from 'classnames/bind';
import styles from 'css/components/_date-block';

const cx = classNames.bind(styles);

export default class DateBlock extends Component {

  render(){

  	const { text, date } = this.props;

  	const dateElement = !date 

  	? 	null 
  	: 	<p className={cx('date', 'clearfix')}>
			<span className={cx('icon', 'fa', 'fa-calendar-o')} /> {text && text + ' '}{moment(date).format('MMMM Do YYYY')}
		</p>

    return (
		  dateElement
    );
  }

};

DateBlock.propTypes = {
  date: PropTypes.string.isRequired
};
