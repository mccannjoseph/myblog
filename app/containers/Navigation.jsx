import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import classNames from 'classnames/bind';
import styles from 'css/components/navigation';

const cx = classNames.bind(styles);

class Navigation extends Component {

  render() {
    return (
      <nav className={cx('navigation')} role="navigation">
        <Link to="/add-post" className={cx('item')} activeClassName={cx('active')}>AddPost</Link>
        <Link to="/" className={cx('item')} activeClassName={cx('active')}>Home</Link>
      </nav>
    );
  }

}

export default Navigation;