import React from 'react';
import styles from './Loading.module.css';
import loadingAnimation from './loading.gif';

const Loading = () => {
  return(
    <div className= {styles.loading}>
      <img src = {loadingAnimation} alt="Loading..." />
    </div>
  );
}

export default Loading;
