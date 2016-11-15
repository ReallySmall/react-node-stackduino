import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/_date-block';
import { toDateString } from 'utilities/strings';

const cx = classNames.bind(styles);

export default class DateBlock extends Component {

  render(){

  	const { text, date } = this.props;
    const formattedDate = toDateString(date);
  	const dateElement = !date 

  	? 	null 
  	: 	<p className={cx('date', 'clearfix')}>
			<span className={cx('icon', 'fa', 'fa-calendar-o')} /> {text && text + ' '}{formattedDate}
		</p>

    return (
		  dateElement
    );
  }

};

DateBlock.propTypes = {
  date: PropTypes.string.isRequired
};
