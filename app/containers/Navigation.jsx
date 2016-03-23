import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from 'css/components/_navigation';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Navigation extends Component {

  render() {
    const { dispatch } = this.props;

    return (
      <section className={cx('preface-area')}>
        <div className={cx('container')}>
          <nav className={cx('row')}>
            <ul>
              <li className={cx('col-sm-4')}>
                <Link className={cx('preface-block')} to="/boards" activeClassName={cx('active')}>
                  <h2><span className={cx('fa', 'fa-code-fork')}></span>Boards</h2>
                </Link>
              </li>
              <li className={cx('col-sm-4')}>
                <Link className={cx('preface-block')} to="/articles" activeClassName={cx('active')}>
                  <h2><span className={cx('fa', 'fa-code-gears')}></span>Articles</h2>
                </Link>
              </li>
              <li className={cx('col-sm-4')}>
                <Link className={cx('preface-block')} to="/gallery" activeClassName={cx('active')}>
                  <h2><span className={cx('fa', 'fa-code-star')}></span>Gallery</h2>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }

}

Navigation.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Navigation);
