import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Viewer = ({mediaType, imageUrlMenu,nameMenu}) => {
  console.log(nameMenu);
  return (
    <div className={cx('viewer')}>
      {
        mediaType === 'image' ? (
          <img onClick={() => window.open(`https://cloud.plating.co.kr/images/menu/${imageUrlMenu}`)} src = {`https://cloud.plating.co.kr/images/menu/${imageUrlMenu}`} alt = "menu"/>
        ) : (
          <div/>
          
        )
      }
      <div className={cx('title')}>
       {nameMenu}
      </div>
    </div>
  );
};

export default Viewer;