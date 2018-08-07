import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Viewer = ({mediaType, imageUrlMenu}) => {
  console.log(imageUrlMenu);
  return (
    <div className={cx('viewer')}>
      {
        mediaType === 'image' ? (
          <img onClick={() => window.open(imageUrlMenu)} src = {imageUrlMenu} alt = "2016.06.17-salmon_steak.jpg"/>
        ) : (
          <div/>
        )
      }
    </div>
  );
};

export default Viewer;