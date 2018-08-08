import React from 'react';
import styles from './ViewerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ViewerTemplate = ({ viewer, menuNavigator,nameMenu }) => (
  <div className={cx('viewer-template')}>
    <header>
      {nameMenu}
    </header>
    <div className={cx('viewer-wrapper')}>
      {viewer}
      <div className={cx('menu-navigator-wrapper')}>
        {menuNavigator}
    </div>
    </div>
  </div>
);
export default ViewerTemplate;